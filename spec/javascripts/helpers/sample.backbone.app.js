AModel = Backbone.Model.extend({});

AView = Backbone.View.extend({
  formBindings: {
    "#something": "a_field"
  },

  htmlBindings: {
    "#showIt": "a_field"
  },

  render: function(){
    var html = $("\
      <div id='villain' data-bind='html villain'><p>test</p></div>\
      <div id='doctor' data-bind='text doctor'>Seuss</div>\
      <div id='pet' data-bind='someAttr pet' someAttr='Cat'></div>\
      <input type='text' id='super_hero_weakness' modelAttr='weakness'>\
      <input type='text' id='something'> \
      <div id='showIt'></div>\
      <input type='text' id='name'>\
      <select id='education'> \
        <option value='none'>none</option> \
        <option value='grade_school'>i dun learned at grade skool</option> \
        <option value='high school'>high school</option> \
        <option value='college'>college</option> \
        <option value='graduate'>graduate</option> \
      </select> \
      <input type='radio' id='graduated_yes' name='graduated' value='yes'>\
      <input type='radio' id='graduated_no' name='graduated' value='no'>\
      <input type='radio' id='graduated_maybe' name='graduated' value='maybe'>\
      <input type='checkbox' id='drivers_license' value='yes'>\
      <textarea id='bio'></textarea>\
      <p id='aParagraph'></p>\
    ");
    this.$(this.el).append(html);
    Backbone.ModelBinding.call(this);
  },
});

AnotherView = Backbone.View.extend({
  formBindings: {
    "#something": "a_field"
  },

  htmlBindings: {
    "#showIt": "a_field"
  },

  render: function(){
    var html = $("\
      <input type='text' class='super_power' modelAttr='weakness'>\
      <select class='education'> \
        <option value='none'>none</option> \
        <option value='grade_school'>i dun learned at grade skool</option> \
        <option value='high school'>high school</option> \
        <option value='college'>college</option> \
        <option value='graduate'>graduate</option> \
      </select> \
      <input type='radio' id='graduated_yes' class='graduated' value='yes'>\
      <input type='radio' id='graduated_no' class='graduated' value='no'>\
      <input type='radio' id='graduated_maybe' class='graduated' value='maybe'>\
      <input type='checkbox' class='drivers_license' value='yes'>\
    ");

    this.$(this.el).append(html);

    Backbone.ModelBinding.call(this, {
      text: 'class',
      textarea: 'class',
      password: 'class',
      radio: 'class',
      select: 'class',
      checkbox: 'class',
    });

  },
});
