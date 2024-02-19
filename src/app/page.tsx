'use client'

import { useState } from "react";
import { Button } from '../../components/ui/button';
import { Textarea } from '../../components/ui/textarea';

import { triggerExtension } from './actions';

const MainPage = () => {
  const [emailDescription, setEmailDescription] = useState('');

  return (
    <div className="p-6">
      This is just a very simple example to automate GMail.
      <div className="w-3/12">
        <Textarea placeholder="Describe the email you want to send:" onChange={(event) => {
          setEmailDescription(event.target.value);
        }}/>
      </div>

      <Button className="m-5" onClick={() => {
        triggerExtension();
      }}>
        Send email
      </Button>
    </div>
  );
};

export default MainPage;
