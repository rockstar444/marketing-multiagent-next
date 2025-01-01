import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_groq import ChatGroq
from langchain.schema import HumanMessage
from typing import List
from vectordb import *

os.environ["GROQ_API_KEY"] = "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"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_mistral = ChatGroq(model="mixtral-8x7b-32768")

class Message(BaseModel):
    role: str
    content: str
    timestamp: str

class ChatRequest(BaseModel):
    messages: List[AnyMessage]

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat_with_bot(request: ChatRequest):
    try:
        if not request.messages:
            raise HTTPException(status_code=400, detail="No messages provided")
        
        # Get only the last user message
        #user_messages = [msg for msg in request.messages if msg.role == "user"]
        messages=request.messages
        
        
        try:
            # Create a chat message
            # Generate response
            response = csv_agent(messages)
            
            # Extract the response text
            #if hasattr(response, 'content'):
             #   response_text = response.content
            #else:
             #   response_text = str(response)
            
            # Clean up response
            response=response["output"]
            #if not any(response_text.startswith(prefix) for prefix in ['#', 'Here', '**']):
             #   response_text = f"Here's your response:\n\n{response_text}"
            
            return ChatResponse(response=response)
            
        except Exception as e:
            print(f"Error generating response: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Error generating AI response: {str(e)}"
            )
            
    except Exception as e:
        print(f"Error processing request: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error processing request: {str(e)}"
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 
