import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { BootCamp02BbbTabRemove } from "../BootCamp02BbbTabRemove";

describe("BootCamp02BbbTabRemove Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<BootCamp02BbbTabRemove />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<BootCamp02BbbTabRemove />);
        const divResult = component.containsMatchingElement(<div>You"re about to remove your tab...</div>);

        expect(divResult).toBeTruthy();
    });
});
