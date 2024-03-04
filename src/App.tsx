import { Button } from "./design-system/Button";
import { Icon } from "./design-system/Icon";

function App() {
    return (
        <>
            <Button size="sm" color="primary" shape="rounded" iconName="arrow">
                Contact
            </Button>

            <Button color="primary" shape="rounded">
                Contact
            </Button>

            <Button size="lg" color="primary" shape="rounded">
                Contact
            </Button>
            <Icon iconName="arrow" height="7rem" width="7rem" />

            <Button
                size="sm"
                color="primary"
                shape="rounded"
                iconName="arrow"
                variant="outlined"
            >
                Contact
            </Button>

            <Button color="primary" shape="rounded" variant="outlined">
                Contact
            </Button>

            <Button
                size="lg"
                color="primary"
                shape="rounded"
                variant="outlined"
                disabled
            >
                Contact
            </Button>
        </>
    );
}

export default App;
