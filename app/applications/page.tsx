"use client"
import React from "react";
import { Card, CardBody} from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";
import { Image } from "@nextui-org/image";
export default function App() {
  return (
    <>
    <div className="flex min-w-lg flex-col">
      <Tabs aria-label="Options">
        <Tab key="Afflatus" title="Afflatus Assisntant">
          <Card>
            <CardBody>
                
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
              <Image
              width={600}
              rounded-full
              alt="eu"
              //src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4cWYxNHNkNWFtZXZ3enlieG96Y2FrMzJoMXRzemN2YTZsNDQzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hKafco7mFwBioBxqFT/giphy.gif"

              src="https://so-development.org/wp-content/uploads/2021/11/full-stack-development.gif"
            />
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
      
    </div>  
   <div className="bg-violet w-xl "></div>
    <Image
        width={1000}
        
        rounded-full
        alt="eu"
        //src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh4cWYxNHNkNWFtZXZ3enlieG96Y2FrMzJoMXRzemN2YTZsNDQzdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hKafco7mFwBioBxqFT/giphy.gif"
        src="https://i.imgur.com/hdNkoz8.png"
    />
    </>
  );

}
