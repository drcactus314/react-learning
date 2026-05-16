import { useState } from 'react';
import {MyComponent} from './MyComponent';
import {MyComponentUseEffect} from './MyComponentUseEffect';
import {MyComponentLayoutEf} from './MyComponentLayoutEf';
import {MyComponentReducer} from './MyComponentReducer';
import {MyComponentUseRef} from './MyComponentUseRef';

function App() {
  

  return (
    <>
     <MyComponent/>
     <MyComponentUseEffect/>
     <MyComponentLayoutEf/>
     <br />
     <MyComponentReducer/>
     <br />
     <MyComponentUseRef/>
    </>
  )
}

export default App
