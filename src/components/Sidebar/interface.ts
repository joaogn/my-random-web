export interface Item {
    Logo?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    name: string,
    path?: string,
    subItemList?: Item[],
}
