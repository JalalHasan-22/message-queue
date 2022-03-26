# Simple chat app

This is a simple messaging application built using socket.io library.
this application has a server which will use the dependency "socket.io", and a client which uses socket.io-client.
to start the server simply type the command "nodemon", to start the client, please type the command "npm start" in the client terminal, which in turns will run the script "snowpack dev" to start our client on port 8080.

### How to run this application

first, please open a terminal for the Server, type the command nodemon, and now the server is running which will create a new socket.io instance and on each new connection, it will create a new socket and logs that socket id to the console.

after the server is running, open another terminal for the client and type "npm start" which will run the client in a new browser window.
to send a public message "broadcast" to all sockets connected to the server, simply type the message in the message box and hit send, to send a message to a specific room, type in the name of the room, all other clients who are joined to that room can receive this message and send messages as well to this room.

You can also visit this [website](https://admin.socket.io/) to see full details regarding all connected sockets, namespaces and much more, just make sure that this URL is added to the array of URL's where CORS are allowed.

Please check the UML diagram below:

![UML](./UML%20new.jpg)
