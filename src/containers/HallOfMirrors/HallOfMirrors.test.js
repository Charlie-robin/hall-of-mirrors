import React from "react";
import HallOfMirrors from "./HallOfMirrors";
import people from "../../data/people";
import { mount } from "enzyme";
import Face from "../../components/Face"

describe("HallOfMirrors tests", () => {
  const mockPerson = people[0];
  let component;

  beforeEach(() => {
    component = mount(
      <Face
        name={mockPerson.name}
        face={mockPerson.faceImg}
        leftEye={mockPerson.leftEyeImg}
        rightEye={mockPerson.rightEyeImg}
      />
    );
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render one face component", () => {
    expect(component.find(Face).length).toEqual(1);
  });

  
});
