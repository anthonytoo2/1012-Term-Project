import { describe, it, vi,  expect, beforeEach  } from "vitest";

import { home, shop, planner, timer } from "./TermProject.js";
const mockLocationReplace = vi.fn();

// 2. Before running tests, mock the global location object
beforeEach(() => {
    // Spy on the global location object and replace its 'replace' method
    // with our mock function. 'vi.stubGlobal' is a good approach in Vitest
    // for modifying global objects.
    vi.stubGlobal('location', {
        replace: mockLocationReplace
    });

    // Clear the mock function's history before each test to ensure
    // each test starts fresh.
    mockLocationReplace.mockClear();
});

    

describe('Navigation Functions', () => {

    // Helper functions to simulate your original code (if not imported)
    // NOTE: In a real-world scenario, you would import the actual functions.
    // I am including them here for a self-contained example.
    const home = () => { location.replace("IndexStu.html"); };
    const shop = () => { location.replace("StuShop.html"); };
    const planner = () => { location.replace("StuImportantDates.html"); };
    const timer = () => { location.replace("StuTimer.html"); };

    it('should navigate to "IndexStu.html" when home() is called', () => {
        // ACT
        home();

        // ASSERT
        // Check that location.replace was called
        expect(mockLocationReplace).toHaveBeenCalled();
        // Check that location.replace was called with the correct argument
        expect(mockLocationReplace).toHaveBeenCalledWith('IndexStu.html');
        // Check that it was called exactly once
        expect(mockLocationReplace).toHaveBeenCalledTimes(1);
    });

    it('should navigate to "StuShop.html" when shop() is called', () => {
        // ACT
        shop();

        // ASSERT
        expect(mockLocationReplace).toHaveBeenCalledWith('StuShop.html');
    });

    it('should navigate to "StuImportantDates.html" when planner() is called', () => {
        // ACT
        planner();

        // ASSERT
        expect(mockLocationReplace).toHaveBeenCalledWith('StuImportantDates.html');
    });

    it('should navigate to "StuTimer.html" when timer() is called', () => {
        // ACT
        timer();

        // ASSERT
        expect(mockLocationReplace).toHaveBeenCalledWith('StuTimer.html');
    });
});