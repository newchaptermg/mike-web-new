/*! formHandler v1.0.0 */
$(function () { $("input,textarea").jqBootstrapValidation({ preventSubmit: !0, submitSuccess: function (a, b) { if (!a.attr("action")) { b.preventDefault(); var c = getProcessorPath(a), d = {}; a.find("input, textarea, option:selected").each(function () { var a = $(this).val(), b = $(this).attr("id"); $(this).is(":checkbox") ? a = $(this).is(":checked") : $(this).is(":radio") ? a = $(this).val() + " = " + $(this).is(":checked") : $(this).is("option:selected") && (b = $(this).parent().attr("id")), d[b] = a }), $.ajax({ url: c, type: "POST", data: d, cache: !1, success: function () { a.is("[success-msg]") ? a.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" + a.attr("success-msg") + "</strong></div></div>") : window.location.replace(a.attr("success-url")), a.trigger("reset") }, error: function () { 0 == $("#form-alert").length && a.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>" + a.attr("fail-msg") + "</strong></div></div>") } }) } }, filter: function () { return $(this).is(":visible") } }); function getProcessorPath(a) { var b = "./includes/" + a.attr("id") + ".php"; return a.attr("template-path") && (b = a.attr("template-path") + "/includes/" + a.attr("id") + ".php"), b } });
