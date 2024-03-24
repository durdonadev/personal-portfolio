import React from "react";
import { Button } from "../../design-system";

const FileViewer: React.FC = () => {
    const openFile = () => {
        window.open(
            process.env.PUBLIC_URL + "/Durdona_Ibragimova_Resume.pdf",
            "_blank"
        );
    };

    return (
        <div>
            <Button
                size="lg"
                shape="rounded"
                color="secondary"
                variant="outlined"
                onClick={openFile}
            >
                Download CV
            </Button>
        </div>
    );
};

export default FileViewer;
