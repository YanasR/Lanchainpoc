from utils.email_sender import send_email_start
import pandas as pd


def update_site(*args)-> str:
    
    """use to update the site in the db for the customer,if site is mentioned in email with update request"""
    
    if len(args) > 0:
       
     
        data=pd.read_excel('C:/Users/02108O744/Documents/Workspace/chatgpt/EmailAi/db/Althea Mock data.xlsx',sheet_name='Sheet1')
        
        data_to_insert=data[data['Cust name']==args[0]]
        
        if data_to_insert.shape[0] == 0:
           new_data={'Cust name':args[0],'Site address': args[1],'Agent Assigned':'System'}
           data = pd.concat([data, pd.DataFrame([new_data])], ignore_index=True)
           subject=f"Site_updated for customer {args[0]} for site {args[1]}"
           body=f"MSD is missing for this request {args[0]} for site {args[1]}"
        else:
           
            data_to_insert['Site address']=args[1]
            data = pd.concat([data, data_to_insert], ignore_index=True)
            subject=f"Site_updated for customer {args[0]} with {args[1]}"
            body=f"This are the customer and site details customer name {data_to_insert['Cust name']},Address:{data_to_insert['Address']},product :{data_to_insert['Product']}"
        
       # data = data.append(new_data, ignore_index=True)
        
        
        data.to_excel('C:/Users/02108O744/Documents/Workspace/chatgpt/EmailAi/db/Althea Mock data.xlsx',sheet_name='Sheet1',index=False)
        send_email_start(subject,body)
        
              
        return "Success Site updated,no further action required"
    else:
        return "Failed,no further action required"

def sent_outage_email(*args)-> str:
    """use to sent an email only if any user report network outage,call this agent only if outage is reported in the email"""
    
    #print(args)
    #print("Email sent with outage information")
    
    if len(args) > 1:
        #send_email_start(f"There is an outage {args[0]} with {args[1]}")
        data=pd.read_excel('C:/Users/02108O744/Documents/Workspace/chatgpt/EmailAi/db/Althea Mock data.xlsx',sheet_name='Sheet1')
        data_to_insert=data[data['Site address']==args[1]]
              
        
        if data_to_insert.shape[0] == 0:
          
           new_data={'Cust name':args[0],'Site address': args[1],'Agent Assigned':'System','Agent Assigned':'Alistair Moonshroud','Priority':0 }
           data = pd.concat([data, pd.DataFrame([new_data])], ignore_index=True)
           subject=f"There is an outage reported by {args[0]} for site {args[1]}"
           body=f"MSD is missing for this request {args[0]} for site  {args[1]},the misisng attributes are product, customer Address ect"
        else:
            #data_to_insert=data_to_insert[0]
            data_to_insert['Escalation']=['True']
    
            data_to_insert['Issue']=['Outage']
            data_to_insert['Priority']=0
            data = pd.concat([data, data_to_insert], ignore_index=True)
            subject=f"There is an outage reported by {args[0]} for site {args[1]}"  
            body=f"""Customer service team,\n\n  An outage has been reported by  {data_to_insert['Cust name'].values[0]} at site {data_to_insert['Address'].values[0]},product {data_to_insert['Product'].values[0]},issue :{data_to_insert['Issue'].values[0]}"""
        
       
        
        condition = (data['Agent Assigned']=='Alistair Moonshroud')  # Example: Select rows where 'A' > 2

# Add 1 to the selected subset of data
        data.loc[condition, 'Priority'] += 1
        #data['Priority']=data[data['Agent Assigned']=='Alistair_Moonshroud']['Priority'].add(1)
        
        
        #data = pd.concat([data, pd.DataFrame([new_data])], ignore_index=True)
     
        send_email_start(subject,body)
        
        data.to_excel('C:/Users/02108O744/Documents/Workspace/chatgpt/EmailAi/db/Althea Mock data.xlsx',sheet_name='Sheet1',index=False)
              
        return "Success"
    else:
        return "Failed,no further action required"


def status_info_email(*args)-> str:
    """use to sent status of the ticket to the user"""
    

    if len(args) > 0:

     
        data=pd.read_excel('C:/Users/02108O744/Documents/Workspace/chatgpt/EmailAi/db/Althea Mock data.xlsx',sheet_name='Sheet1')
        
        data_status=data[data['Cust name']==args[0]]
        print(data_status)
        subject="status of the issue"
        print(subject)
        #body='Testing'
        body=f"The issue identified is {data_status['Issue'].values[0]} due to {data_status['Sub issue'].values[0]}  for the device {data_status['Device 1'].values[0]} with severity  {data_status['Severity'].values[0]} and it is being worked with priority {data_status['Priority'].values[0]}, "
        
        print(body)
    #print(args)
    #print("Email sent with outage information")
    
    print('here')
    send_email_start(subject,body)
              
    return "Success,No further action required"

def sent_info_email(*args)-> str:
    """use to sent an email only if there are no matching agents"""
    
    #print(args)
    #print("Email sent with outage information")
    

    send_email_start(f"Please check this email with action {str(args).replace('[','').replace(']','')}")
              
    return "Success,No further action required"



    
    
        
    
    