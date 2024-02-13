export default class LeadsModel {
  public id: number | null = null;
  public title: string | null = null;
  public tag: string | null = null;
  public heading: number | null = null;
  public description: string | null = null;
  public file: string | null = null;

  constructor(item: any) {
    this._setId(item);
    this._setTitle(item);
    this._setTag(item);
    this._setHeading(item);
    this._setDescription(item);
    this._setFile(item);
  }

  /**
   * set id
   * @param id
   * @private
   */
  private _setId({ id }: any) {
    this.id = id;
  }

  /**
   * set title
   * @param title
   * @private
   */
  _setTitle({ title }: any) {
    this.title = title;
  }

  /**
   * set tag
   * @param tag
   * @private
   */
  _setTag({ tag }: any) {
    this.tag = tag;
  }

  /**
   * set heading
   * @param heading
   * @private
   */
  _setHeading({ heading }: any) {
    this.heading = heading;
  }

  /**
   * set description
   * @param description
   * @private
   */
  _setDescription({ description }: any) {
    this.description = description;
  }

  /**
   * set file
   * @param file
   * @private
   */
  _setFile({ file }: any) {
    this.file = file;
  }
}
