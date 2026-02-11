import useExtensionFilter from "../Store";
import ExtensionsFilter from "./ExtensionsFilter";
import ExtensionsList from "./ExtensionsList";

export default function Main() {
    const { displayed, showAll, showActive, showInactive } = useExtensionFilter();

    return (
        <main className="extension-main__container">
            <ExtensionsFilter
                showAll={showAll}
                showActive={showActive}
                showInactive={showInactive}
            />
            <div className="extension__grid-display">
                {displayed.map((item) => (
                    <ExtensionsList
                        logo={item.logo}
                        name={item.name}
                        description={item.description}
                        isActive={item.isActive}
                    />
                ))}
                <div style={{ height: "20px" }}></div>
            </div>
        </main>
    );
}
