import React from 'react'

export default () => (
    <div>
      <div className="col-md-4">
        <div className="panel chipped-panel">
          <div className="panel-heading">
            Chipped panel
          </div>
          <div className="panel-body">
            Sed faucibus, eros ultricies porttitor auctor, lorem felis cursus ipsum, a vulputate odio ante vitae urna. Quisque commodo, nisl quis porta tempor, nibh ipsum gravida tortor.
          </div>
          <div className="panel-footer">Panel footer</div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="panel chipped-panel gradient-panel-success">
          <div className="panel-heading">
            Chipped panel
          </div>
          <div className="panel-body">
            Sed faucibus, eros ultricies porttitor auctor, lorem felis cursus ipsum, a vulputate odio ante vitae urna. Quisque commodo, nisl quis porta tempor, nibh ipsum gravida tortor.
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="panel chipped-panel accent-panel-danger">
          <div className="panel-heading">
            <div className="panel-tools">
              <button className="btn btn-outline btn-square no-shadows btn-xs hover-default"><i className="fa fa-window-minimize"></i></button>
              <button className="btn btn-outline btn-square no-shadows btn-xs hover-default"><i className="fa fa-window-maximize"></i></button>
              <button className="btn btn-outline btn-square no-shadows btn-xs hover-danger"><i className="fa fa-window-close"></i></button>
            </div>
            Chipped panel
          </div>
          <div className="panel-body">
            Sed faucibus, eros ultricies porttitor auctor, lorem felis cursus ipsum, a vulputate odio ante vitae urna. Quisque commodo, nisl quis porta tempor, nibh ipsum gravida tortor.
          </div>
        </div>
      </div>
    </div>  
)
