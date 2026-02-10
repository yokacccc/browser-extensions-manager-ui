import React from "react";

export default function ExtensionsFilter({ showAll, showActive, showInactive }) {
    return (
        <div className="extensions-filter__contanier">
            <h1>Extensions List</h1>
            <div className="extensions__filter-container">
                <input type="radio" value="all" id="all" name="filterBtn" />
                <label htmlFor="all" className="filter-style" onClick={showAll}>
                    All
                </label>
                <input type="radio" value="active" id="active" name="filterBtn" />
                <label htmlFor="active" className="filter-style" onClick={showActive}>
                    Active
                </label>
                <input type="radio" value="inactive" id="inactive" name="filterBtn" />
                <label htmlFor="inactive" className="filter-style" onClick={showInactive}>
                    Inactive
                </label>
            </div>
        </div>
    );
}
