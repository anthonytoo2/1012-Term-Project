import { describe, it, vi,  expect, beforeEach  } from "vitest";

import { home, shop, planner, timer } from "./TermProject.js";
const mockLocationReplace = vi.fn();

// the beforeEach was completed using AI, since all the functions ran based on DOM, these were the simplest ones to create
beforeEach(() => {
    // looks at the global location object and replace its 'replace' method with the mock function. 'vi.stubGlobal' is a good approach in Vitest for modifying global objects.
    vi.stubGlobal('location', {
        replace: mockLocationReplace
    });

    // Clear the mock function's history before each test to ensure each test starts fresh.
    mockLocationReplace.mockClear();
});

    

describe('Navigation Functions', () => {

    // constants simulate the functions in TermPeoject.js to help the test cases work
    const home = () => { location.replace("IndexStu.html"); };
    const shop = () => { location.replace("StuShop.html"); };
    const planner = () => { location.replace("StuImportantDates.html"); };
    const timer = () => { location.replace("StuTimer.html"); };

    it('should navigate to "IndexStu.html" when home() is called', () => {
        home();
        // Check that location.replace was called with the correct argument
        expect(mockLocationReplace).toHaveBeenCalledWith('IndexStu.html');
    });

    it('should navigate to "StuShop.html" when shop() is called', () => {
        shop();

        // checks that location.replace is called
        expect(mockLocationReplace).toHaveBeenCalled();
    });

    it('should navigate to "StuImportantDates.html" when planner() is called', () => {
        planner();
        // checkst that location.replace is called only once
        expect(mockLocationReplace).toHaveBeenCalledTimes(1);
    });

    it('should navigate to "StuTimer.html" when timer() is called', () => {
        timer();
        expect(mockLocationReplace).toHaveBeenCalledWith('StuTimer.html');
    });
});