import React, {useRef} from "react";
import {observer} from "mobx-react";
import {useStores} from "../stores";

const Component = observer(() => {
  const {AuthStore} = useStores();
  const inputRef = useRef();
  const inputChange = (e) => {
    AuthStore.setUserName(inputRef.current.value)
  };
  return (
    <>
      <h1>Login:{AuthStore.value.username}</h1>
      <input onChange={inputChange} ref={inputRef}/>
    </>
  )
});

export default Component;