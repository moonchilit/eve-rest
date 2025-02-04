import React from 'react';

interface Props {
  FName: string;
  MPhone: string;
  MEmail: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({  FName,MPhone, MEmail }) => (
  <div>
    
      <p><h2>{FName}</h2></p>
    <p> Номер телефона: {MPhone}</p>
    <p> Почта: {MEmail}</p>
  </div>
);