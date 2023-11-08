"use client"

import React from "react";
import {Switch} from "@nextui-org/react";
import { Br_icon } from "./br_icon";
import { Us_icon } from "./us_icon";

export const LanguageSelector =  ()=>{
   
    return (
        <Switch
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ?  (
            
            <Br_icon />
        
          ) : (
            
            <Us_icon />
          )
        }
      >
        Language
      </Switch>
    );



}