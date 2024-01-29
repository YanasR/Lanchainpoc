import os
from pydantic import BaseModel as PydanticBaseModel
import pydantic
class Config:
    arbitrary_types_allowed = True

from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from langchain import PromptTemplate
from agents.agent_site_update import run_the_agent
global sentiment
import win32com.client
import pandas as pd
import os
import warnings
import openai

openai.api_key = os.environ["OPENAI_API_KEY"]
# try:
#     outlook = win32com.client.GetActiveObject('Outlook.Application')
# except:
#     outlook = win32com.client.Dispatch('Outlook.Application')
outlook = win32com.client.Dispatch("Outlook.Application").GetNamespace("MAPI")
inbox = outlook.GetDefaultFolder(6) 

class MessageReader:

    def message_reading(self,subject):

        messages = inbox.Items
       # print(messages)
        sender=''
        message_body =''
        messages.Sort("[ReceivedTime]", True)
        for message in messages:
            
           
            if message.subject.find(subject.strip()) > -1:
                print (message.subject)
                message_body=message.body
                sender=message.SendUsingAccount()
                break
        return message_body,sender

def main():
    
    # with open('input/email1.txt','r') as f:
    #     email_data=f.read()
    #
    #email_data='There is an network outage at site 212 Cedar Lane, Charlotte, NC 78901  reported by john,report the outage,there is no action taken so far,we request you to take immediate action'
    #email_data='update the site for customer 123a to 9813 valley ranch pkwy 1183'
    #
    #email_data='There is an network outage at site 9182 valley ranch pkwy reported by yanas'
    #email_data='I need a coffee'
    
    subject='Demonov1001'
    msgclass=MessageReader()
    message_body,sender=msgclass.message_reading(subject)
    print(message_body)
    
    
    email_data=message_body.strip()
 
    if email_data=='':
        message_body,sender=msgclass.message_reading(subject)
        email_data=message_body.strip()
        print(message_body)

    sentiment_capture=""""Please analyze the sentiment of the following text and categorize it as one of the following:
            Negative: If the text expresses strong negative sentiment or dissatisfaction.
            Very Negative: If the text conveys extremely negative emotions or a highly unfavorable opinion.
            Neutral: If the text is neither positive nor negative, or if it's difficult to determine its sentiment.
            Positive: If the text has a generally positive tone or expresses satisfaction.
            High Positive: If the text conveys very positive emotions or an extremely favorable opinion."
            You can then provide the text you want to analyze, and the model will classify it into one of these sentiment categories based on its understanding of the text's tone and context.\n
            {email}"""
            
    action_input_template=PromptTemplate(input_variables=["email"],template=sentiment_capture)
    llm=ChatOpenAI(temperature=0.1,model_name='gpt-4')
    chain=LLMChain(llm=llm,prompt=action_input_template)
    sentiment=chain.run(email=email_data)
    
    print('\n\n')
    
    print('The user sentiment is ',sentiment)
    
    print('Recalculating the priority based on this email...')
    print('\n\n')
    try:
       run_the_agent(email_data)
    except:
        try:
            run_the_agent(email_data)
        except:
            print('try again')
    
    # input_template="""
    #     given below email from customer I want you to perform action based on that \n
    #
    #      {email}"""
    #
    # action_input_template=PromptTemplate(input_variables=["email"],template=input_template)
    #
    # llm=ChatOpenAI(temperature=1,model_name='gpt-3.5-turbo')
    #
    # chain=LLMChain(llm=llm,prompt=action_input_template)
    #
    # print(chain.run(email=email_data))

if __name__ == '__main__':
   main()
