import React from "react";
import Face from "./Face";
import people from "../../data/people";
import { mount } from "enzyme";
import Eyes from "../../components/Eyes";

describe("Face tests", () => {
  let component;
  const mockPerson = people[0];

  beforeEach(() => {
    component = mount(<Eyes isLeft={true} leftEye={mockPerson.leftEyeImg} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should match left image url", () => {
    expect(component.find("img").prop("src")).toBe(mockPerson.leftEyeImg);
  });

  it("should match right image url", () => {
    component = mount(<Eyes leftEye={mockPerson.rightEyeImg} />);
    expect(component.find("img").prop("src")).toBe(mockPerson.rightEyeImg);
  });
});

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
