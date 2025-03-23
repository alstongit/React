### Context api

1. use createContext method
2. once youve made a context u need to make a provider as well and why provider? coz that will provide the data and by using a tag 
eg: <context>
      <Login/>
        <Dashboard/>
        <Cards/>
    <context/>

3. u make another jsx file thatll be the provider since itll return jsx 
4. make a function in that file and pass children as props which is basically passing whatver u get, forward.
5. 