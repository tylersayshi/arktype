import React from "react"

export const modelDemo = (
    <div
        style={{
            backgroundColor: "#EEF1FC",
            width: "100%",
            height: "600px",
            border: 0,
            marginLeft: -8,
            marginRight: -8,
            padding: 16,
            overflow: "hidden",
            borderRadius: "8px"
        }}
    >
        <iframe
            id="demo"
            src="https://stackblitz.com/edit/re-model?embed=1&file=model.ts&hideDevTools=1&hideExplorer=1&hideNavigation=1&theme=dark"
            style={{ height: "100%", width: "100%", borderRadius: 8 }}
            title="@re-/model playground"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
    </div>
)
