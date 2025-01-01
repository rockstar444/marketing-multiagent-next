from setup import *

from langchain_experimental.agents import create_csv_agent

def csv_agent(messages):
    agent= create_csv_agent(
        model_llama, 
        "./data/chunk_44.csv", 
        verbose=True,
        allow_dangerous_code=True
        )

    system_message=[SystemMessage(content="you are an intelligent assistant")]
    #user_message=[HumanMessage(content="which age-group is most loyal")]
    #prompt=system_message+ user_message
    prompt=system_message+messages
    res=agent.invoke(prompt)
    print(type(res))
    print(res)


