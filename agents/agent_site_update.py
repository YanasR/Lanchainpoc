from langchain import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.agents import initialize_agent,Tool
from langchain.agents import AgentType
from tools.tools import update_site,sent_outage_email,sent_info_email,status_info_email


def run_the_agent(email):
    updatesiteTool= Tool(
        name="update site method",
        func=update_site,
        description="use to update the site in the db for the customer,if site is mentioned in email with update request"
    )
    
    outageTool= Tool(
        name="outage email sender",
        func=sent_outage_email,
        description="use to sent an email only if any user report network outage,call this agent only if outage is reported in the email"
    )
    
    statusTool= Tool(
        name="status email sender",
        func=status_info_email,
        description="use to sent status of the ticket if user request for status"
    )
    infoTool= Tool(
        name="information email sender",
        func=sent_info_email,
        description="use to sent an email only if there are no matching agent for the email"
    )
      

    
    tools = [outageTool,
        updatesiteTool,
        statusTool,
        infoTool
        
    ]
    
    llm=ChatOpenAI(temperature=0,model_name='gpt-4')
    
    
    agent = initialize_agent(
        tools,
        llm,
        agent="chat-zero-shot-react-description",
        verbose=True
    )
    #Extract the customer's name and site from the email and take appropriate action based on the available agent. If both the customer's name and site are present in the email, assign the task to the corresponding agent. In case there are no matching agents available, send an email to the information email sender agent, specifying the action in the email. 



    template="""Extract the customer name,site from the text and perform action mentioned in email given are the details of agents available \n
    if request is asking for the status of the ticket call status email sender passing the customer name,site,
    if user is reporting an outage, call outage email sender agent passing the customer name,site 
    if request is to update site call update site method agent passing the customer name,site,   
    if there are not matching agent then call information email sender agent
    
     \n {email} """
    #template="""Extract the customer name and site from the email and perform the action based on available agent passing customer name and site \n {email} """
    
    prompt_template=PromptTemplate(input_variables=["email"],template=template)
    
    #print(prompt_template)
    
    agent.run(prompt_template.format_prompt(email=email))
