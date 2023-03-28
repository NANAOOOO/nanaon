from flask import Flask, render_template, request, redirect, url_for
import random
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime, date

app = Flask(__name__)

@app.route('/',methods=['GET'])
def index():
    if request.method == 'GET':
       return render_template('home.html')


seiza = {
    "A": random.randrange(100),
    "B":random.randrange(100),
    "C":random.randrange(100),
    "D":random.randrange(100),
    "E":random.randrange(100),
    "F":random.randrange(100),
    "G":random.randrange(100),
    "H":random.randrange(100),
    "I":random.randrange(100),
    "J":random.randrange(100),
    "K":random.randrange(100),
    "L":random.randrange(100)
}

@app.route('/telling',methods=['GET','POST'])
def indiana():
    koi = random.randrange(100) 
    kin = random.randrange(100) 
    if request.method == 'GET':
    #    koi = random.randrange(100)  
    # #  zentai = random.randrange(100) 
    #    kin = random.randrange(100)   
       return render_template('telling.html', kin = kin, koi = koi)
    else:
      userseiza = request.form.get('seiza')
      userpoint = seiza[userseiza]
      zentai = (kin + koi)/2 * (userpoint/100)
      return render_template('telling.html',zentai = zentai,kin = kin, koi = koi)



# @app.route('/seizaselect',methods = ['POST'])
# def indoor():
#    if request.method == 'POST':
#       userseiza = request.form.get('seiza')
#       userpoint = seiza[userseiza]
#       zentai = (kin + koi)/2 * (userpoint/100)
#       return render_template('/telling',zentai = zentai)

@app.route('/kokkyo',methods=['GET'])
def indeed():
    if request.method == 'GET':
       return render_template('kokkyo.html')


if __name__ == "__main__":
    app.run(debug=True)


