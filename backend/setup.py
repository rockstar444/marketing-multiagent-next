

import warnings
warnings.filterwarnings("ignore")

from typing import List, Optional
from pydantic import BaseModel,Field


#langchain setup
import langchain
import langchain_google_genai
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI
from langchain_groq import ChatGroq
from langchain.prompts import ChatPromptTemplate            
from langchain.schema.output_parser import StrOutputParser  
from langchain.output_parsers.openai_functions import JsonOutputFunctionsParser #for parsing the function 
from langchain.agents.output_parsers import OpenAIFunctionsAgentOutputParser
from langchain.schema.runnable import RunnableMap, RunnableLambda, RunnablePassthrough
from langchain_core.utils.function_calling import convert_to_openai_function
from langchain.tools.render import format_tool_to_openai_function
from langchain.agents.format_scratchpad import format_to_openai_functions
from langchain.prompts import MessagesPlaceholder



#langGraph setup
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator
from langchain_core.messages import AnyMessage, SystemMessage, HumanMessage, ToolMessage, AIMessage
from langchain_community.tools.tavily_search import TavilySearchResults





#all the models
model_gemini=ChatGoogleGenerativeAI(model='gemini-1.5-flash')
model_openai=ChatOpenAI(model="gpt-4o-mini", temperature=1.4)
model_llama=ChatGroq(model="llama-3.3-70b-versatile")
model_mistral=ChatGroq(model="mixtral-8x7b-32768")
model_llama_vision=ChatGroq(model="llama-3.2-11b-vision-preview")



#llama index setup
from llama_index.core import SimpleDirectoryReader
from llama_index.core import VectorStoreIndex
