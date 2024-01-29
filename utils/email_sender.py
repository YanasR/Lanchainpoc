
import smtplib
import sys
import mimetypes
import email.mime.text
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from email.message import Message
from email.mime.audio import MIMEAudio
from email.mime.image import MIMEImage
from datetime import date
SMTP_SERVER='test.att.com'

def send_email_start(subject,body):
    
  
    subject =subject
    
    body = f"{body}  \n\nThanks \n\nAI Team"
    body_html =''          
    ## Print email
    to_emails = 'Yanas.Rajindran@ibm.com'
    cc_emails = 'yanas.rajindran@ibm.com'
    bcc_emails = ''

    print("To: ", to_emails, "\ncc: ", cc_emails, "\nbcc: ", bcc_emails, "\nSubject: ", subject, "\nEmail:\n", body, "\nHtml Email:\n", body_html)
  

    send_email(subject = subject,
            body = body,
            # body_html=body_html,
           # body_type = 'html',
            from_addr = 'Yanas.Rajindran@ibm.com',
            to_addresses = to_emails,
            cc_addresses = cc_emails,
            bcc_addresses= bcc_emails,
            file_to_send = None, 
            attachment_name ='', 
            network='IBM'
        )
    print("Email sent!")
    
    



def send_email(subject, body, from_addr, to_addresses, cc_addresses, \
            bcc_addresses='', \
            file_to_send = '', attachment_name ='', \
            network='att', \
            body_type = 'plain', \
            body_html = ''):
  #  file_to_send =True      
    if network == 'att':
        smtp_host = SMTP_SERVER
        smtp_port = 25
    else: # use IBM smtp
        smtp_host = 'ap.relay.ibm.com'
        smtp_port = 25

    msg = MIMEMultipart('alternative')

    msg.attach(MIMEText(body, 'plain'))
    #msg.attach(MIMEText(body_html, 'html'))

    # Create SMTP Object
    print(smtp_host)
    smtp = smtplib.SMTP(smtp_host)
    print ('connecting to smtp...')

    # show the debug log
    #smtp.set_debuglevel(1)
    
    # fill content with MIMEText's object
    # msg = email.mime.text.MIMEText('Hi ,All')
    if file_to_send:
        ctype, encoding = mimetypes.guess_type(file_to_send)
        if ctype is None or encoding is not None:
            ctype = "application/octet-stream"

        maintype, subtype = ctype.split("/", 1)
        
        if maintype == "text":
            fp = open(file_to_send)
            # Note: we should handle calculating the charset
            attachment = MIMEText(fp.read(), _subtype=subtype)
            fp.close()
        else:
            fp = open(file_to_send, "rb")
            attachment = MIMEBase(maintype, subtype)
            attachment.set_payload(fp.read())
            fp.close()
            encoders.encode_base64(attachment)
            
        
        
        # html = html.format(table=tabulate(data, headers=col_list, tablefmt="html"))
        # message = MIMEMultipart(
        #     "alternative", None, [MIMEText(text), MIMEText(html,'html')])
        attachment.add_header("Content-Disposition", "attachment", filename=attachment_name)
        msg.attach(attachment)

  #  fp = open('image/queries.png', 'rb')
  #  msgImage = MIMEImage(fp.read())
   # fp.close()
        
        # Define the image's ID as referenced above
    #msgImage.add_header('Content-ID', '<image1>')
 
    #msg.attach(msgImage)   
    msg['From'] = from_addr
    msg['To'] = to_addresses
    msg['CC'] = cc_addresses
    msg['Subject'] = subject
    
    # print (msg.as_string())
    smtp.sendmail(from_addr = from_addr,
        to_addrs = cc_addresses.split(",") + bcc_addresses.split(",") + to_addresses.split(","),
        msg = msg.as_string()
        )
    smtp.quit()


