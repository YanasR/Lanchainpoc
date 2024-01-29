import os
from pydantic import BaseModel as PydanticBaseModel
import pydantic
class Config:
    arbitrary_types_allowed = True

from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from langchain import PromptTemplate
from agents.agent_site_update import run_the_agent

def main():
    
    # with open('input/email1.txt','r') as f:
    #     email_data=f.read()
    #
    #email_data='update the site for customer 123a to 9813 valley ranch pkwy 1183'
    #email_data='I need a coffee'
    
    os.environ['OPENAI_API_KEY']='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'
    
    email_data='please output the code'
    
    prompt_capture="""create an api in python named createTicket which takes assetid, location as input. By default, set assetType as Equipment. If lookupType is any of 'CIRCUIT_ID','AVPNT','CONNECTSVCS', set assetType as 'Circuit' and if lookupType is 'BVOIP_TN', set assetType as 'Telephone'. If lookupType = 'BRASS_SITEID' or 'SITEID', set assetType as 'Circuit', activeOrg as 'US-ENTBB-SA', serviceLine = 'Broadband Access', FunctionalArea='GLOBAL_AM', If serviceLine = 'NB-IPVPN',  set activeOrg as 'VIRTL-DS1', managingOrg = 'VIRTL', Create a json named createTicketInput with the following inputs from the main request: 'UserID' - 'ETT', managingOrg , assetType, assetId, location, reportType, FunctionalArea, severity, TicketSource = 'AET', TicketType = 'WEB', 'PowerToCPE': 'Y', Severity, reportType from input, default 'ValidateContactInfo', 'ValidateDispatchAuth',  'ValidateLCONInfo',' ValidateLocationAccessHours', 'ValidatePowerToCPE', 'ValidateTestAuth' to 'Yes'. Trigger a post createTicket API request which takes createTicketInput  and returns ticketNumber if responseCode is 200 else returns error response. If createTicketResponse is 200, send a POST request to updateTicket API with ticketNumber and logNote as 'This is an online ticket created by customer in Express Ticketing.' If createTicketResponse is 200, generate a pin of digits only of size 6 and send a POST request to update3i API with action as 'GeneratePin', ticketNumber and pin as inputs. If update3i API is success, send an email with Subject as "Incident status PIN" and body as Trouble Ticket Details:
                    Ticket Number(s): ticketNumber PIN: pin. This email was auto-generated, please do not reply directly.
                    In the main input if notificationMethod is Yes, create a list of phoneNumbers consisting of primaryPhoneNumber and localPhoneNumber from input and trigger CBUS API named subscription with input as assetid, phoneNumbers, ticketNumber, location, contactRole as Asset, email, SMS from main input.  {email} """
            
    action_input_template=PromptTemplate(input_variables=["email"],template=prompt_capture)
    llm=ChatOpenAI(temperature=1,model_name='gpt-3.5-turbo')
    chain=LLMChain(llm=llm,prompt=action_input_template)
    sentiment=chain.run(email=email_data)
    print(sentiment)
    
    
    
    #run_the_agent(email_data)
    
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