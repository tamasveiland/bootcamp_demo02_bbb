import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import { BootCamp02BbbTab } from "../BootCamp02BbbTab";

describe("BootCamp02BbbTab Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<BootCamp02BbbTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<BootCamp02BbbTab />);
        const divResult = component.containsMatchingElement(<div>This is your tab</div>);

        expect(divResult).toBeTruthy();
    });

    // Mocking Sample
    it("should show alert on button click", () => {
        window.alert = jest.fn();

        const component = mount(<BootCamp02BbbTab />);
        const button = component.find("button");
        button.simulate("click");

        expect(window.alert).toHaveBeenCalledWith("It worked!");

        component.unmount();
    });
});
