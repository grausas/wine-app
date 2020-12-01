import { storiesOf } from "@storybook/react";
import React from "react";
import Section from "./Section";

storiesOf("Full-width Section", module)
  .add("Section", () => (
    <Section background="eee" fullWidth={true}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, neque
      commodi optio autem harum aut error, laborum, debitis cupiditate quidem
      vitae blanditiis cumque corrupti voluptate voluptas illum quasi explicabo
      ratione.
    </Section>
  ))
  .add("Fixed-width Section", () => (
    <Section background="eee" fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, neque
      commodi optio autem harum aut error, laborum, debitis cupiditate quidem
      vitae blanditiis cumque corrupti voluptate voluptas illum quasi explicabo
      ratione.
    </Section>
  ))
  .add("Transparent Section", () => (
    <Section fullWidth={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, neque
      commodi optio autem harum aut error, laborum, debitis cupiditate quidem
      vitae blanditiis cumque corrupti voluptate voluptas illum quasi explicabo
      ratione.
    </Section>
  ));
