import classNames from 'classnames';

const CLASS_NAME = '<%= project_name %>';

export type <%- ctx.classify(project_name) %>Props = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default (props: <%- ctx.classify(project_name) %>Props) =>{
  const handleClick = () => {
    console.log('click.');
  };

  return (
    <div
      data-component={CLASS_NAME}
      className={classNames(CLASS_NAME, className)}
      {...props}>
      <button
        style={{ padding: 20, width: '100%' }}
        onClick={handleClick}
        className="icon-play">
        Enjoy coding.
      </button>
    </div>
  )
}
