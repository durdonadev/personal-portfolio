import React from "react";
import { Button } from "../../design-system";

interface Props {}

interface State {}

class FileViewer extends React.Component<Props, State> {
    openFile() {
        window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank");
    }

    render() {
        return (
            <div>
                <Button
                    size="lg"
                    shape="rounded"
                    color="secondary"
                    variant="outlined"
                    onClick={this.openFile}
                >
                    Download CV
                </Button>
            </div>
        );
    }
}

export default FileViewer;
