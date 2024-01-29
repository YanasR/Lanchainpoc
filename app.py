from flask import Flask,render_template,request,Response
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/tickets')
def index():
    #data=pd.read_excel('db/Althea Mock data.xlsx',sheet_name='Sheet1')
    # Render the HTML template named 'index.html' located in the 'templates' folder
    return render_template('index.html')


@app.route('/selection')
def selection():
    
    query=request.args["input"].replace("_"," ")
    data=pd.read_excel('db/Althea Mock data.xlsx',sheet_name='Sheet1')
    
    data=data[data['Agent Assigned']==query]
    
    data.fillna('',inplace=True)
    data.sort_values(by='Priority', inplace=True)
    
    
    # Render the HTML template named 'index.html' located in the 'templates' folder
    resp = Response(data.to_json(orient='records'), status=200, mimetype='application/json')
    return resp


if __name__ == '__main__':
    ip='0.0.0.0'
    port = 6006
    

    app.run(host=ip,port=port)

