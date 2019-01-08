import React from "react";
import { ITag } from "../../../../models/applicationState";
import TagsInput from "../../common/tagsInput/tagsInput";

export interface IEditorFooterProps {
    tags: ITag[];
    onTagsChanged: (value) => void;
    onTagClicked?: (value) => void;
}

export interface IEditorFooterState {
    tags: ITag[];
}

export default class EditorFooter extends React.Component<IEditorFooterProps, IEditorFooterState> {
    constructor(props) {
        super(props);
        this.state = {
            tags: props.tags,
        };
        this.onTagsChanged = this.onTagsChanged.bind(this);
    }

    public render() {
        return (
            <div>
                <TagsInput
                    tags={this.state.tags}
                    onChange={this.onTagsChanged}
                    onTagClick={this.props.onTagClicked}
                />
            </div>
        );
    }

    private onTagsChanged(tags) {
        this.setState({
            tags,
        }, () => this.props.onTagsChanged(this.state));
    }
}
