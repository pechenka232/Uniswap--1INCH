export function handleEvent(event: MyEvent): void {
    let entity = new Entity(event.params.id.toHex());
    entity.save();
}
