import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { BootCamp02BbbTabConfig } from "../BootCamp02BbbTabConfig";

describe("BootCamp02BbbTabConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<BootCamp02BbbTabConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<BootCamp02BbbTabConfig />);
        const divResult = component.containsMatchingElement(<div>Configure your tab</div>);

        expect(divResult).toBeTruthy();
    });
});
