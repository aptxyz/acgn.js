*start

@macro name=bg
@clear layer=base
@image layer=base storage=%storage
@endmacro

@macro name=fg
@image layer=image storage=%storage position=%position|center
@endmacro

@macro name=dialog
@resetfont
@if cond=(%fg !== undefined)
    @clear layer=image
    @image layer=image storage=%fg position=center
@endif


@clear layer=message tag=%tag
@text  layer=message tag=dialog tag=%tag color=%color|white type=name    text=%name
@endmacro

@macro name=scr
@set v.text.current.type=screen
@endmacro

@macro name=dia
@set v.text.current.type=message
@endmacro

@macro name=甲
@dialog * tag=甲 name=路人甲 color=lightgreen
@endmacro

@macro name=我
@dialog * tag=我 name=我 color=lightblue
@endmacro

@macro name=clfg
@clear layer=image
@endmacro

@macro name=lr
@l
@r
@endmacro

@macro name=w
@p
@endmacro

@macro name=clbutton
@clear layer=button
@endmacro

@return