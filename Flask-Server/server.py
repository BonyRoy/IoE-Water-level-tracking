from flask import Flask
import pyrebase
firebaseConfig = {
  'apiKey': "AIzaSyBSiy_vw0RTckQwLTOelDXU76BPasDt05w",
  'authDomain': "ioewater.firebaseapp.com",
  'projectId': "ioewater",
  "databaseURL": "https://ioewater-default-rtdb.firebaseio.com/",
  'storageBucket': "ioewater.appspot.com",
  'messagingSenderId': "766474679659",
  'appId': "1:766474679659:web:f53b5e5c15721cb7dd882e",
  'measurementId': "G-K7MVSCX617"
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()
cust = 'jhon'
app =Flask(__name__)

@app.route("/members")
def members():
  all_users = db.child("Users").child(cust).child('data').get()
  dist = []
  for user in all_users.each(): 
      dist.append(user.val()) 
  print(dist[-1])
  return{"members":dist[-1]}

@app.route("/motoron")
def motoron():
  db.child("Users").child(cust).child('manual').set({'status':True})
  db.child("Users").child(cust).child('motor').set({'status':True})
  return{"motor":True}

@app.route("/motoroff")
def motoroff():
  db.child("Users").child(cust).child('manual').set({'status':True})
  db.child("Users").child(cust).child('motor').set({'status':False})
  return{"motor":False}

@app.route("/manualoff")
def manualoff():
  db.child("Users").child(cust).child('manual').set({'status':False})
  return{"manual":False}


if __name__ == "__main__":
    app.run(debug=True)