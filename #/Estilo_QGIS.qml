<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis simplifyDrawingHints="1" hasScaleBasedVisibilityFlag="0" readOnly="0" simplifyMaxScale="1" labelsEnabled="1" simplifyDrawingTol="1" styleCategories="AllStyleCategories" maxScale="0" minScale="100000000" version="3.16.4-Hannover" simplifyAlgorithm="0" simplifyLocal="1">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <temporal endField="" durationUnit="min" enabled="0" mode="0" startExpression="" fixedDuration="0" startField="" endExpression="" accumulate="0" durationField="">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <renderer-v2 type="graduatedSymbol" graduatedMethod="GraduatedColor" attr="floor(&quot;status&quot;)*1000 +&#xd;&#xa;to_int(right(&quot;status&quot;,(length(&quot;status&quot;)-2)))" enableorderby="0" symbollevels="0" forceraster="0">
    <ranges>
      <range label="Carregado no BDGEx" symbol="0" lower="5000.000000000000000" render="true" upper="5000.000000000000000"/>
      <range label="Em Carga BDGEx" symbol="1" lower="4000.000000000000000" render="true" upper="4016.000000000000000"/>
      <range label="Edição" symbol="2" lower="3000.000000000000000" render="true" upper="3016.000000000000000"/>
      <range label="Adequação" symbol="3" lower="2000.000000000000000" render="true" upper="2004.000000000000000"/>
      <range label="Hidro" symbol="4" lower="1032.000000000000000" render="true" upper="1256.000000000000000"/>
      <range label="Preparo" symbol="5" lower="1000.000000000000000" render="true" upper="1016.000000000000000"/>
      <range label="Fora do Projeto" symbol="6" lower="0.000000000000000" render="true" upper="0.000000000000000"/>
    </ranges>
    <symbols>
      <symbol force_rhr="0" alpha="1" name="0" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="0,164,46,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="1" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="255,192,143,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="2" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="249,177,31,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="3" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="125,166,255,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="4" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="249,69,246,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="35,35,35,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="5" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="250,162,218,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="4,4,4,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
      <symbol force_rhr="0" alpha="1" name="6" type="fill" clip_to_extent="1">
        <layer enabled="1" class="SimpleFill" pass="0" locked="0">
          <prop k="border_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="color" v="150,150,150,255"/>
          <prop k="joinstyle" v="bevel"/>
          <prop k="offset" v="0,0"/>
          <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
          <prop k="offset_unit" v="MM"/>
          <prop k="outline_color" v="4,4,4,255"/>
          <prop k="outline_style" v="solid"/>
          <prop k="outline_width" v="0.26"/>
          <prop k="outline_width_unit" v="MM"/>
          <prop k="style" v="solid"/>
          <data_defined_properties>
            <Option type="Map">
              <Option name="name" type="QString" value=""/>
              <Option name="properties"/>
              <Option name="type" type="QString" value="collection"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </symbols>
    <classificationMethod id="Custom">
      <symmetricMode astride="0" symmetrypoint="0" enabled="0"/>
      <labelFormat format="%1 - %2" trimtrailingzeroes="1" labelprecision="4"/>
      <parameters>
        <Option/>
      </parameters>
      <extraInformation/>
    </classificationMethod>
    <rotation/>
    <sizescale/>
  </renderer-v2>
  <labeling type="simple">
    <settings calloutType="simple">
      <text-style fontItalic="0" fontFamily="MS Shell Dlg 2" fontSizeMapUnitScale="3x:0,0,0,0,0,0" multilineHeight="1" isExpression="0" previewBkgrdColor="255,255,255,255" fontLetterSpacing="0" fontSize="10" allowHtml="0" fontKerning="1" fieldName="mi" textOrientation="horizontal" textColor="0,0,0,255" fontStrikeout="0" fontWeight="50" capitalization="0" namedStyle="Normal" useSubstitutions="0" textOpacity="1" blendMode="0" fontSizeUnit="Point" fontUnderline="0" fontWordSpacing="0">
        <text-buffer bufferSizeMapUnitScale="3x:0,0,0,0,0,0" bufferSizeUnits="MM" bufferNoFill="1" bufferSize="1" bufferJoinStyle="128" bufferBlendMode="0" bufferDraw="0" bufferOpacity="1" bufferColor="255,255,255,255"/>
        <text-mask maskEnabled="0" maskOpacity="1" maskType="0" maskSize="1.5" maskSizeUnits="MM" maskSizeMapUnitScale="3x:0,0,0,0,0,0" maskJoinStyle="128" maskedSymbolLayers=""/>
        <background shapeRadiiY="0" shapeOffsetMapUnitScale="3x:0,0,0,0,0,0" shapeDraw="0" shapeBorderWidthMapUnitScale="3x:0,0,0,0,0,0" shapeSVGFile="" shapeRotationType="0" shapeSizeType="0" shapeSizeMapUnitScale="3x:0,0,0,0,0,0" shapeOffsetX="0" shapeRadiiMapUnitScale="3x:0,0,0,0,0,0" shapeBorderWidth="0" shapeRotation="0" shapeRadiiUnit="MM" shapeJoinStyle="64" shapeRadiiX="0" shapeType="0" shapeFillColor="255,255,255,255" shapeOffsetUnit="MM" shapeSizeUnit="MM" shapeSizeX="0" shapeBorderWidthUnit="MM" shapeBlendMode="0" shapeOpacity="1" shapeSizeY="0" shapeOffsetY="0" shapeBorderColor="128,128,128,255">
          <symbol force_rhr="0" alpha="1" name="markerSymbol" type="marker" clip_to_extent="1">
            <layer enabled="1" class="SimpleMarker" pass="0" locked="0">
              <prop k="angle" v="0"/>
              <prop k="color" v="231,113,72,255"/>
              <prop k="horizontal_anchor_point" v="1"/>
              <prop k="joinstyle" v="bevel"/>
              <prop k="name" v="circle"/>
              <prop k="offset" v="0,0"/>
              <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <prop k="offset_unit" v="MM"/>
              <prop k="outline_color" v="35,35,35,255"/>
              <prop k="outline_style" v="solid"/>
              <prop k="outline_width" v="0"/>
              <prop k="outline_width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <prop k="outline_width_unit" v="MM"/>
              <prop k="scale_method" v="diameter"/>
              <prop k="size" v="2"/>
              <prop k="size_map_unit_scale" v="3x:0,0,0,0,0,0"/>
              <prop k="size_unit" v="MM"/>
              <prop k="vertical_anchor_point" v="1"/>
              <data_defined_properties>
                <Option type="Map">
                  <Option name="name" type="QString" value=""/>
                  <Option name="properties"/>
                  <Option name="type" type="QString" value="collection"/>
                </Option>
              </data_defined_properties>
            </layer>
          </symbol>
        </background>
        <shadow shadowRadiusUnit="MM" shadowOffsetGlobal="1" shadowOffsetAngle="135" shadowUnder="0" shadowOffsetUnit="MM" shadowOffsetMapUnitScale="3x:0,0,0,0,0,0" shadowBlendMode="6" shadowDraw="0" shadowRadius="1.5" shadowRadiusMapUnitScale="3x:0,0,0,0,0,0" shadowRadiusAlphaOnly="0" shadowColor="0,0,0,255" shadowOpacity="0.7" shadowOffsetDist="1" shadowScale="100"/>
        <dd_properties>
          <Option type="Map">
            <Option name="name" type="QString" value=""/>
            <Option name="properties"/>
            <Option name="type" type="QString" value="collection"/>
          </Option>
        </dd_properties>
        <substitutions/>
      </text-style>
      <text-format addDirectionSymbol="0" plussign="0" leftDirectionSymbol="&lt;" autoWrapLength="0" placeDirectionSymbol="0" wrapChar="" multilineAlign="3" rightDirectionSymbol=">" reverseDirectionSymbol="0" useMaxLineLengthForAutoWrap="1" formatNumbers="0" decimals="3"/>
      <placement distMapUnitScale="3x:0,0,0,0,0,0" fitInPolygonOnly="0" priority="5" centroidInside="0" maxCurvedCharAngleIn="25" centroidWhole="0" yOffset="0" repeatDistance="0" geometryGenerator="" layerType="PolygonGeometry" quadOffset="4" repeatDistanceMapUnitScale="3x:0,0,0,0,0,0" lineAnchorType="0" rotationAngle="0" placementFlags="10" distUnits="MM" preserveRotation="1" offsetType="0" predefinedPositionOrder="TR,TL,BR,BL,R,L,TSR,BSR" overrunDistance="0" repeatDistanceUnits="MM" geometryGeneratorType="PointGeometry" dist="0" placement="0" overrunDistanceMapUnitScale="3x:0,0,0,0,0,0" polygonPlacementFlags="2" lineAnchorPercent="0.5" labelOffsetMapUnitScale="3x:0,0,0,0,0,0" offsetUnits="MM" maxCurvedCharAngleOut="-25" overrunDistanceUnit="MM" xOffset="0" geometryGeneratorEnabled="0"/>
      <rendering scaleMin="0" fontMinPixelSize="3" drawLabels="1" displayAll="0" obstacleType="1" obstacleFactor="1" zIndex="0" fontLimitPixelSize="0" limitNumLabels="0" scaleMax="1000000" fontMaxPixelSize="10000" minFeatureSize="0" obstacle="1" upsidedownLabels="0" mergeLines="0" scaleVisibility="1" labelPerPart="0" maxNumLabels="2000"/>
      <dd_properties>
        <Option type="Map">
          <Option name="name" type="QString" value=""/>
          <Option name="properties"/>
          <Option name="type" type="QString" value="collection"/>
        </Option>
      </dd_properties>
      <callout type="simple">
        <Option type="Map">
          <Option name="anchorPoint" type="QString" value="pole_of_inaccessibility"/>
          <Option name="ddProperties" type="Map">
            <Option name="name" type="QString" value=""/>
            <Option name="properties"/>
            <Option name="type" type="QString" value="collection"/>
          </Option>
          <Option name="drawToAllParts" type="bool" value="false"/>
          <Option name="enabled" type="QString" value="0"/>
          <Option name="labelAnchorPoint" type="QString" value="point_on_exterior"/>
          <Option name="lineSymbol" type="QString" value="&lt;symbol force_rhr=&quot;0&quot; alpha=&quot;1&quot; name=&quot;symbol&quot; type=&quot;line&quot; clip_to_extent=&quot;1&quot;>&lt;layer enabled=&quot;1&quot; class=&quot;SimpleLine&quot; pass=&quot;0&quot; locked=&quot;0&quot;>&lt;prop k=&quot;align_dash_pattern&quot; v=&quot;0&quot;/>&lt;prop k=&quot;capstyle&quot; v=&quot;square&quot;/>&lt;prop k=&quot;customdash&quot; v=&quot;5;2&quot;/>&lt;prop k=&quot;customdash_map_unit_scale&quot; v=&quot;3x:0,0,0,0,0,0&quot;/>&lt;prop k=&quot;customdash_unit&quot; v=&quot;MM&quot;/>&lt;prop k=&quot;dash_pattern_offset&quot; v=&quot;0&quot;/>&lt;prop k=&quot;dash_pattern_offset_map_unit_scale&quot; v=&quot;3x:0,0,0,0,0,0&quot;/>&lt;prop k=&quot;dash_pattern_offset_unit&quot; v=&quot;MM&quot;/>&lt;prop k=&quot;draw_inside_polygon&quot; v=&quot;0&quot;/>&lt;prop k=&quot;joinstyle&quot; v=&quot;bevel&quot;/>&lt;prop k=&quot;line_color&quot; v=&quot;60,60,60,255&quot;/>&lt;prop k=&quot;line_style&quot; v=&quot;solid&quot;/>&lt;prop k=&quot;line_width&quot; v=&quot;0.3&quot;/>&lt;prop k=&quot;line_width_unit&quot; v=&quot;MM&quot;/>&lt;prop k=&quot;offset&quot; v=&quot;0&quot;/>&lt;prop k=&quot;offset_map_unit_scale&quot; v=&quot;3x:0,0,0,0,0,0&quot;/>&lt;prop k=&quot;offset_unit&quot; v=&quot;MM&quot;/>&lt;prop k=&quot;ring_filter&quot; v=&quot;0&quot;/>&lt;prop k=&quot;tweak_dash_pattern_on_corners&quot; v=&quot;0&quot;/>&lt;prop k=&quot;use_custom_dash&quot; v=&quot;0&quot;/>&lt;prop k=&quot;width_map_unit_scale&quot; v=&quot;3x:0,0,0,0,0,0&quot;/>&lt;data_defined_properties>&lt;Option type=&quot;Map&quot;>&lt;Option name=&quot;name&quot; type=&quot;QString&quot; value=&quot;&quot;/>&lt;Option name=&quot;properties&quot;/>&lt;Option name=&quot;type&quot; type=&quot;QString&quot; value=&quot;collection&quot;/>&lt;/Option>&lt;/data_defined_properties>&lt;/layer>&lt;/symbol>"/>
          <Option name="minLength" type="double" value="0"/>
          <Option name="minLengthMapUnitScale" type="QString" value="3x:0,0,0,0,0,0"/>
          <Option name="minLengthUnit" type="QString" value="MM"/>
          <Option name="offsetFromAnchor" type="double" value="0"/>
          <Option name="offsetFromAnchorMapUnitScale" type="QString" value="3x:0,0,0,0,0,0"/>
          <Option name="offsetFromAnchorUnit" type="QString" value="MM"/>
          <Option name="offsetFromLabel" type="double" value="0"/>
          <Option name="offsetFromLabelMapUnitScale" type="QString" value="3x:0,0,0,0,0,0"/>
          <Option name="offsetFromLabelUnit" type="QString" value="MM"/>
        </Option>
      </callout>
    </settings>
  </labeling>
  <customproperties>
    <property key="dualview/previewExpressions">
      <value>"nome_carta"</value>
    </property>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="variableNames"/>
    <property key="variableValues"/>
  </customproperties>
  <blendMode>0</blendMode>
  <featureBlendMode>0</featureBlendMode>
  <layerOpacity>1</layerOpacity>
  <SingleCategoryDiagramRenderer attributeLegend="1" diagramType="Histogram">
    <DiagramCategory spacingUnitScale="3x:0,0,0,0,0,0" lineSizeScale="3x:0,0,0,0,0,0" lineSizeType="MM" scaleBasedVisibility="0" diagramOrientation="Up" spacing="5" barWidth="5" penColor="#000000" spacingUnit="MM" minScaleDenominator="0" maxScaleDenominator="1e+08" opacity="1" width="15" rotationOffset="270" height="15" penWidth="0" minimumSize="0" sizeScale="3x:0,0,0,0,0,0" direction="0" labelPlacementMethod="XHeight" backgroundColor="#ffffff" backgroundAlpha="255" penAlpha="255" sizeType="MM" scaleDependency="Area" enabled="0" showAxis="1">
      <fontProperties description="MS Shell Dlg 2,8.25,-1,5,50,0,0,0,0,0" style=""/>
      <attribute label="" color="#000000" field=""/>
      <axisSymbol>
        <symbol force_rhr="0" alpha="1" name="" type="line" clip_to_extent="1">
          <layer enabled="1" class="SimpleLine" pass="0" locked="0">
            <prop k="align_dash_pattern" v="0"/>
            <prop k="capstyle" v="square"/>
            <prop k="customdash" v="5;2"/>
            <prop k="customdash_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <prop k="customdash_unit" v="MM"/>
            <prop k="dash_pattern_offset" v="0"/>
            <prop k="dash_pattern_offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <prop k="dash_pattern_offset_unit" v="MM"/>
            <prop k="draw_inside_polygon" v="0"/>
            <prop k="joinstyle" v="bevel"/>
            <prop k="line_color" v="35,35,35,255"/>
            <prop k="line_style" v="solid"/>
            <prop k="line_width" v="0.26"/>
            <prop k="line_width_unit" v="MM"/>
            <prop k="offset" v="0"/>
            <prop k="offset_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <prop k="offset_unit" v="MM"/>
            <prop k="ring_filter" v="0"/>
            <prop k="tweak_dash_pattern_on_corners" v="0"/>
            <prop k="use_custom_dash" v="0"/>
            <prop k="width_map_unit_scale" v="3x:0,0,0,0,0,0"/>
            <data_defined_properties>
              <Option type="Map">
                <Option name="name" type="QString" value=""/>
                <Option name="properties"/>
                <Option name="type" type="QString" value="collection"/>
              </Option>
            </data_defined_properties>
          </layer>
        </symbol>
      </axisSymbol>
    </DiagramCategory>
  </SingleCategoryDiagramRenderer>
  <DiagramLayerSettings dist="0" zIndex="0" showAll="1" placement="1" priority="0" obstacle="0" linePlacementFlags="18">
    <properties>
      <Option type="Map">
        <Option name="name" type="QString" value=""/>
        <Option name="properties"/>
        <Option name="type" type="QString" value="collection"/>
      </Option>
    </properties>
  </DiagramLayerSettings>
  <geometryOptions removeDuplicateNodes="0" geometryPrecision="0">
    <activeChecks/>
    <checkConfiguration type="Map">
      <Option name="QgsGeometryGapCheck" type="Map">
        <Option name="allowedGapsBuffer" type="double" value="0"/>
        <Option name="allowedGapsEnabled" type="bool" value="false"/>
        <Option name="allowedGapsLayer" type="QString" value=""/>
      </Option>
    </checkConfiguration>
  </geometryOptions>
  <legend type="default-vector"/>
  <referencedLayers/>
  <fieldConfiguration>
    <field configurationFlags="None" name="id">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="mi">
      <editWidget type="TextEdit">
        <config>
          <Option type="Map">
            <Option name="IsMultiline" type="bool" value="false"/>
            <Option name="UseHtml" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="bloco">
      <editWidget type="TextEdit">
        <config>
          <Option type="Map">
            <Option name="IsMultiline" type="bool" value="false"/>
            <Option name="UseHtml" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="status">
      <editWidget type="ValueMap">
        <config>
          <Option type="Map">
            <Option name="map" type="List">
              <Option type="Map">
                <Option name="Fora do Projeto" type="QString" value="0"/>
              </Option>
              <Option type="Map">
                <Option name="Preparo" type="QString" value="1"/>
              </Option>
              <Option type="Map">
                <Option name="Coletar Raster" type="QString" value="1.1"/>
              </Option>
              <Option type="Map">
                <Option name="Hidrografia Adquirida" type="QString" value="1.128"/>
              </Option>
              <Option type="Map">
                <Option name="Em Ajustes Finais" type="QString" value="1.16"/>
              </Option>
              <Option type="Map">
                <Option name="Raster Coletado" type="QString" value="1.2"/>
              </Option>
              <Option type="Map">
                <Option name="Revisão Hidrografia" type="QString" value="1.256"/>
              </Option>
              <Option type="Map">
                <Option name="Preparo Finalizado" type="QString" value="1.32"/>
              </Option>
              <Option type="Map">
                <Option name="Coletar Vetores" type="QString" value="1.4"/>
              </Option>
              <Option type="Map">
                <Option name="Aquisição de Hidrografia" type="QString" value="1.64"/>
              </Option>
              <Option type="Map">
                <Option name="Vetores coletado" type="QString" value="1.8"/>
              </Option>
              <Option type="Map">
                <Option name="Adequação Vetorial" type="QString" value="2"/>
              </Option>
              <Option type="Map">
                <Option name="Em Adequação" type="QString" value="2.1"/>
              </Option>
              <Option type="Map">
                <Option name="Adequação Pronta" type="QString" value="2.2"/>
              </Option>
              <Option type="Map">
                <Option name="Controle de Qualidade" type="QString" value="2.4"/>
              </Option>
              <Option type="Map">
                <Option name="Edição" type="QString" value="3"/>
              </Option>
              <Option type="Map">
                <Option name="Em Edição" type="QString" value="3.1"/>
              </Option>
              <Option type="Map">
                <Option name="Em 2ª Revisão" type="QString" value="3.16"/>
              </Option>
              <Option type="Map">
                <Option name="Editada" type="QString" value="3.2"/>
              </Option>
              <Option type="Map">
                <Option name="Em 1ª Revisão" type="QString" value="3.4"/>
              </Option>
              <Option type="Map">
                <Option name="1ª Rev Pronta" type="QString" value="3.8"/>
              </Option>
              <Option type="Map">
                <Option name="Em Carga BDGEx" type="QString" value="4"/>
              </Option>
              <Option type="Map">
                <Option name="MDT Carregado" type="QString" value="4.1"/>
              </Option>
              <Option type="Map">
                <Option name="Carta Orto Imagem" type="QString" value="4.16"/>
              </Option>
              <Option type="Map">
                <Option name="MDS Carregado" type="QString" value="4.2"/>
              </Option>
              <Option type="Map">
                <Option name="Orto Img Carregada" type="QString" value="4.4"/>
              </Option>
              <Option type="Map">
                <Option name="CDGV Carregados" type="QString" value="4.8"/>
              </Option>
              <Option type="Map">
                <Option name="Carregada no BDGEx" type="QString" value="5"/>
              </Option>
            </Option>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="editor">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioedicao">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoedicao">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="revisor1">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicio1rev">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="termino1rev">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="servidor">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="niveis">
      <editWidget type="TextEdit">
        <config>
          <Option type="Map">
            <Option name="IsMultiline" type="bool" value="false"/>
            <Option name="UseHtml" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="densidade">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="revisor2">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicio2rev">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="termino2rev">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="nome_carta">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inom">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="iniciocorrecao1">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminocorrecao1">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="iniciocorrecao2">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminocorrecao2">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="impressa">
      <editWidget type="CheckBox">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="ligacao">
      <editWidget type="CheckBox">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="totalobj">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="total_p">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="total_l">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="total_a">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="txt_p">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="txt_l">
      <editWidget type="TextEdit">
        <config>
          <Option type="Map">
            <Option name="IsMultiline" type="bool" value="false"/>
            <Option name="UseHtml" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="o">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="s">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="se">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="so">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="l">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="n">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="no">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="ne">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="linha">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="coluna">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="regiao">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="corretor1">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="corretor2">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="CQ1">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="CQ2">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioCQ1">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioCQ2">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoCQ1">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoCQ2">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="AdVet">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="RevHid">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="AqHid">
      <editWidget type="ValueRelation">
        <config>
          <Option type="Map">
            <Option name="AllowMulti" type="bool" value="false"/>
            <Option name="AllowNull" type="bool" value="true"/>
            <Option name="Description" type="QString" value="&quot;posto_graduacao&quot;"/>
            <Option name="FilterExpression" type="QString" value=""/>
            <Option name="Key" type="QString" value="codigo"/>
            <Option name="Layer" type="QString" value="usuarios_a4ae14a4_cca9_4f85_a8ed_485102d9453c"/>
            <Option name="LayerName" type="QString" value="usuarios"/>
            <Option name="LayerProviderName" type="QString" value="postgres"/>
            <Option name="LayerSource" type="QString" value="dbname='Controle_PE' host=10.46.136.22 port=5432 user='postgres' sslmode=disable key='codigo' checkPrimaryKeyUnicity='0' table=&quot;public&quot;.&quot;usuarios&quot;"/>
            <Option name="NofColumns" type="int" value="1"/>
            <Option name="OrderByValue" type="bool" value="false"/>
            <Option name="UseCompleter" type="bool" value="false"/>
            <Option name="Value" type="QString" value="nome"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioRevHid">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioAdVet">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="inicioAqHid">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoRevHid">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoAdVet">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="terminoAqHid">
      <editWidget type="DateTime">
        <config>
          <Option type="Map">
            <Option name="allow_null" type="bool" value="true"/>
            <Option name="calendar_popup" type="bool" value="true"/>
            <Option name="display_format" type="QString" value="yyyy-MM-dd hh:mm:ss"/>
            <Option name="field_format" type="QString" value="yyyy-MM-dd"/>
            <Option name="field_iso_format" type="bool" value="false"/>
          </Option>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="prioridade">
      <editWidget type="CheckBox">
        <config>
          <Option type="Map">
            <Option name="CheckedState" type="QString" value=""/>
            <Option name="UncheckedState" type="QString" value=""/>
          </Option>
        </config>
      </editWidget>
    </field>
  </fieldConfiguration>
  <aliases>
    <alias name="" index="0" field="id"/>
    <alias name="" index="1" field="mi"/>
    <alias name="" index="2" field="bloco"/>
    <alias name="" index="3" field="status"/>
    <alias name="" index="4" field="editor"/>
    <alias name="" index="5" field="inicioedicao"/>
    <alias name="" index="6" field="terminoedicao"/>
    <alias name="" index="7" field="revisor1"/>
    <alias name="" index="8" field="inicio1rev"/>
    <alias name="" index="9" field="termino1rev"/>
    <alias name="" index="10" field="servidor"/>
    <alias name="" index="11" field="niveis"/>
    <alias name="" index="12" field="densidade"/>
    <alias name="" index="13" field="revisor2"/>
    <alias name="" index="14" field="inicio2rev"/>
    <alias name="" index="15" field="termino2rev"/>
    <alias name="" index="16" field="nome_carta"/>
    <alias name="" index="17" field="inom"/>
    <alias name="" index="18" field="iniciocorrecao1"/>
    <alias name="" index="19" field="terminocorrecao1"/>
    <alias name="" index="20" field="iniciocorrecao2"/>
    <alias name="" index="21" field="terminocorrecao2"/>
    <alias name="" index="22" field="impressa"/>
    <alias name="" index="23" field="ligacao"/>
    <alias name="" index="24" field="totalobj"/>
    <alias name="" index="25" field="total_p"/>
    <alias name="" index="26" field="total_l"/>
    <alias name="" index="27" field="total_a"/>
    <alias name="" index="28" field="txt_p"/>
    <alias name="" index="29" field="txt_l"/>
    <alias name="" index="30" field="o"/>
    <alias name="" index="31" field="s"/>
    <alias name="" index="32" field="se"/>
    <alias name="" index="33" field="so"/>
    <alias name="" index="34" field="l"/>
    <alias name="" index="35" field="n"/>
    <alias name="" index="36" field="no"/>
    <alias name="" index="37" field="ne"/>
    <alias name="" index="38" field="linha"/>
    <alias name="" index="39" field="coluna"/>
    <alias name="" index="40" field="regiao"/>
    <alias name="" index="41" field="corretor1"/>
    <alias name="" index="42" field="corretor2"/>
    <alias name="" index="43" field="CQ1"/>
    <alias name="" index="44" field="CQ2"/>
    <alias name="" index="45" field="inicioCQ1"/>
    <alias name="" index="46" field="inicioCQ2"/>
    <alias name="" index="47" field="terminoCQ1"/>
    <alias name="" index="48" field="terminoCQ2"/>
    <alias name="" index="49" field="AdVet"/>
    <alias name="" index="50" field="RevHid"/>
    <alias name="" index="51" field="AqHid"/>
    <alias name="" index="52" field="inicioRevHid"/>
    <alias name="" index="53" field="inicioAdVet"/>
    <alias name="" index="54" field="inicioAqHid"/>
    <alias name="" index="55" field="terminoRevHid"/>
    <alias name="" index="56" field="terminoAdVet"/>
    <alias name="" index="57" field="terminoAqHid"/>
    <alias name="" index="58" field="prioridade"/>
  </aliases>
  <defaults>
    <default applyOnUpdate="0" field="id" expression=""/>
    <default applyOnUpdate="0" field="mi" expression=""/>
    <default applyOnUpdate="0" field="bloco" expression=""/>
    <default applyOnUpdate="0" field="status" expression=""/>
    <default applyOnUpdate="0" field="editor" expression=""/>
    <default applyOnUpdate="0" field="inicioedicao" expression=""/>
    <default applyOnUpdate="0" field="terminoedicao" expression=""/>
    <default applyOnUpdate="0" field="revisor1" expression=""/>
    <default applyOnUpdate="0" field="inicio1rev" expression=""/>
    <default applyOnUpdate="0" field="termino1rev" expression=""/>
    <default applyOnUpdate="0" field="servidor" expression=""/>
    <default applyOnUpdate="0" field="niveis" expression=""/>
    <default applyOnUpdate="0" field="densidade" expression=""/>
    <default applyOnUpdate="0" field="revisor2" expression=""/>
    <default applyOnUpdate="0" field="inicio2rev" expression=""/>
    <default applyOnUpdate="0" field="termino2rev" expression=""/>
    <default applyOnUpdate="0" field="nome_carta" expression=""/>
    <default applyOnUpdate="0" field="inom" expression=""/>
    <default applyOnUpdate="0" field="iniciocorrecao1" expression=""/>
    <default applyOnUpdate="0" field="terminocorrecao1" expression=""/>
    <default applyOnUpdate="0" field="iniciocorrecao2" expression=""/>
    <default applyOnUpdate="0" field="terminocorrecao2" expression=""/>
    <default applyOnUpdate="0" field="impressa" expression=""/>
    <default applyOnUpdate="0" field="ligacao" expression=""/>
    <default applyOnUpdate="0" field="totalobj" expression=""/>
    <default applyOnUpdate="0" field="total_p" expression=""/>
    <default applyOnUpdate="0" field="total_l" expression=""/>
    <default applyOnUpdate="0" field="total_a" expression=""/>
    <default applyOnUpdate="0" field="txt_p" expression=""/>
    <default applyOnUpdate="0" field="txt_l" expression=""/>
    <default applyOnUpdate="0" field="o" expression=""/>
    <default applyOnUpdate="0" field="s" expression=""/>
    <default applyOnUpdate="0" field="se" expression=""/>
    <default applyOnUpdate="0" field="so" expression=""/>
    <default applyOnUpdate="0" field="l" expression=""/>
    <default applyOnUpdate="0" field="n" expression=""/>
    <default applyOnUpdate="0" field="no" expression=""/>
    <default applyOnUpdate="0" field="ne" expression=""/>
    <default applyOnUpdate="0" field="linha" expression=""/>
    <default applyOnUpdate="0" field="coluna" expression=""/>
    <default applyOnUpdate="0" field="regiao" expression=""/>
    <default applyOnUpdate="0" field="corretor1" expression=""/>
    <default applyOnUpdate="0" field="corretor2" expression=""/>
    <default applyOnUpdate="0" field="CQ1" expression=""/>
    <default applyOnUpdate="0" field="CQ2" expression=""/>
    <default applyOnUpdate="0" field="inicioCQ1" expression=""/>
    <default applyOnUpdate="0" field="inicioCQ2" expression=""/>
    <default applyOnUpdate="0" field="terminoCQ1" expression=""/>
    <default applyOnUpdate="0" field="terminoCQ2" expression=""/>
    <default applyOnUpdate="0" field="AdVet" expression=""/>
    <default applyOnUpdate="0" field="RevHid" expression=""/>
    <default applyOnUpdate="0" field="AqHid" expression=""/>
    <default applyOnUpdate="0" field="inicioRevHid" expression=""/>
    <default applyOnUpdate="0" field="inicioAdVet" expression=""/>
    <default applyOnUpdate="0" field="inicioAqHid" expression=""/>
    <default applyOnUpdate="0" field="terminoRevHid" expression=""/>
    <default applyOnUpdate="0" field="terminoAdVet" expression=""/>
    <default applyOnUpdate="0" field="terminoAqHid" expression=""/>
    <default applyOnUpdate="0" field="prioridade" expression=""/>
  </defaults>
  <constraints>
    <constraint constraints="3" notnull_strength="1" field="id" unique_strength="1" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="mi" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="bloco" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="status" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="editor" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioedicao" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoedicao" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="revisor1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicio1rev" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="termino1rev" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="servidor" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="niveis" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="densidade" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="revisor2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicio2rev" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="termino2rev" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="nome_carta" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inom" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="iniciocorrecao1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminocorrecao1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="iniciocorrecao2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminocorrecao2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="impressa" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="ligacao" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="totalobj" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="total_p" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="total_l" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="total_a" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="txt_p" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="txt_l" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="o" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="s" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="se" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="so" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="l" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="n" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="no" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="ne" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="linha" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="coluna" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="regiao" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="corretor1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="corretor2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="CQ1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="CQ2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioCQ1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioCQ2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoCQ1" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoCQ2" unique_strength="0" exp_strength="0"/>
    <constraint constraints="4" notnull_strength="0" field="AdVet" unique_strength="0" exp_strength="2"/>
    <constraint constraints="0" notnull_strength="0" field="RevHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="AqHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioRevHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioAdVet" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="inicioAqHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoRevHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoAdVet" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="terminoAqHid" unique_strength="0" exp_strength="0"/>
    <constraint constraints="0" notnull_strength="0" field="prioridade" unique_strength="0" exp_strength="0"/>
  </constraints>
  <constraintExpressions>
    <constraint desc="" field="id" exp=""/>
    <constraint desc="" field="mi" exp=""/>
    <constraint desc="" field="bloco" exp=""/>
    <constraint desc="" field="status" exp=""/>
    <constraint desc="" field="editor" exp=""/>
    <constraint desc="" field="inicioedicao" exp=""/>
    <constraint desc="" field="terminoedicao" exp=""/>
    <constraint desc="" field="revisor1" exp=""/>
    <constraint desc="" field="inicio1rev" exp=""/>
    <constraint desc="" field="termino1rev" exp=""/>
    <constraint desc="" field="servidor" exp=""/>
    <constraint desc="" field="niveis" exp=""/>
    <constraint desc="" field="densidade" exp=""/>
    <constraint desc="" field="revisor2" exp=""/>
    <constraint desc="" field="inicio2rev" exp=""/>
    <constraint desc="" field="termino2rev" exp=""/>
    <constraint desc="" field="nome_carta" exp=""/>
    <constraint desc="" field="inom" exp=""/>
    <constraint desc="" field="iniciocorrecao1" exp=""/>
    <constraint desc="" field="terminocorrecao1" exp=""/>
    <constraint desc="" field="iniciocorrecao2" exp=""/>
    <constraint desc="" field="terminocorrecao2" exp=""/>
    <constraint desc="" field="impressa" exp=""/>
    <constraint desc="" field="ligacao" exp=""/>
    <constraint desc="" field="totalobj" exp=""/>
    <constraint desc="" field="total_p" exp=""/>
    <constraint desc="" field="total_l" exp=""/>
    <constraint desc="" field="total_a" exp=""/>
    <constraint desc="" field="txt_p" exp=""/>
    <constraint desc="" field="txt_l" exp=""/>
    <constraint desc="" field="o" exp=""/>
    <constraint desc="" field="s" exp=""/>
    <constraint desc="" field="se" exp=""/>
    <constraint desc="" field="so" exp=""/>
    <constraint desc="" field="l" exp=""/>
    <constraint desc="" field="n" exp=""/>
    <constraint desc="" field="no" exp=""/>
    <constraint desc="" field="ne" exp=""/>
    <constraint desc="" field="linha" exp=""/>
    <constraint desc="" field="coluna" exp=""/>
    <constraint desc="" field="regiao" exp=""/>
    <constraint desc="" field="corretor1" exp=""/>
    <constraint desc="" field="corretor2" exp=""/>
    <constraint desc="" field="CQ1" exp=""/>
    <constraint desc="" field="CQ2" exp=""/>
    <constraint desc="" field="inicioCQ1" exp=""/>
    <constraint desc="" field="inicioCQ2" exp=""/>
    <constraint desc="" field="terminoCQ1" exp=""/>
    <constraint desc="" field="terminoCQ2" exp=""/>
    <constraint desc="" field="AdVet" exp="&quot;mi&quot;"/>
    <constraint desc="" field="RevHid" exp=""/>
    <constraint desc="" field="AqHid" exp=""/>
    <constraint desc="" field="inicioRevHid" exp=""/>
    <constraint desc="" field="inicioAdVet" exp=""/>
    <constraint desc="" field="inicioAqHid" exp=""/>
    <constraint desc="" field="terminoRevHid" exp=""/>
    <constraint desc="" field="terminoAdVet" exp=""/>
    <constraint desc="" field="terminoAqHid" exp=""/>
    <constraint desc="" field="prioridade" exp=""/>
  </constraintExpressions>
  <expressionfields/>
  <attributeactions>
    <defaultAction key="Canvas" value="{00000000-0000-0000-0000-000000000000}"/>
  </attributeactions>
  <attributetableconfig sortOrder="1" actionWidgetStyle="dropDown" sortExpression="&quot;CQ1&quot;">
    <columns>
      <column name="id" hidden="0" type="field" width="-1"/>
      <column name="mi" hidden="0" type="field" width="-1"/>
      <column name="bloco" hidden="0" type="field" width="-1"/>
      <column name="status" hidden="0" type="field" width="151"/>
      <column name="editor" hidden="0" type="field" width="-1"/>
      <column name="inicioedicao" hidden="0" type="field" width="-1"/>
      <column name="terminoedicao" hidden="0" type="field" width="-1"/>
      <column name="revisor1" hidden="0" type="field" width="-1"/>
      <column name="inicio1rev" hidden="0" type="field" width="-1"/>
      <column name="termino1rev" hidden="0" type="field" width="-1"/>
      <column name="servidor" hidden="0" type="field" width="-1"/>
      <column name="niveis" hidden="0" type="field" width="-1"/>
      <column name="densidade" hidden="0" type="field" width="-1"/>
      <column name="revisor2" hidden="0" type="field" width="-1"/>
      <column name="inicio2rev" hidden="0" type="field" width="-1"/>
      <column name="termino2rev" hidden="0" type="field" width="-1"/>
      <column name="nome_carta" hidden="0" type="field" width="-1"/>
      <column name="inom" hidden="0" type="field" width="-1"/>
      <column name="iniciocorrecao1" hidden="0" type="field" width="-1"/>
      <column name="terminocorrecao1" hidden="0" type="field" width="-1"/>
      <column name="iniciocorrecao2" hidden="0" type="field" width="-1"/>
      <column name="terminocorrecao2" hidden="0" type="field" width="-1"/>
      <column name="impressa" hidden="0" type="field" width="-1"/>
      <column name="ligacao" hidden="0" type="field" width="-1"/>
      <column name="totalobj" hidden="0" type="field" width="-1"/>
      <column name="total_p" hidden="0" type="field" width="-1"/>
      <column name="total_l" hidden="0" type="field" width="-1"/>
      <column name="total_a" hidden="0" type="field" width="-1"/>
      <column name="txt_p" hidden="0" type="field" width="-1"/>
      <column name="txt_l" hidden="0" type="field" width="-1"/>
      <column name="o" hidden="0" type="field" width="-1"/>
      <column name="s" hidden="0" type="field" width="-1"/>
      <column name="se" hidden="0" type="field" width="-1"/>
      <column name="so" hidden="0" type="field" width="-1"/>
      <column name="l" hidden="0" type="field" width="-1"/>
      <column name="n" hidden="0" type="field" width="-1"/>
      <column name="no" hidden="0" type="field" width="-1"/>
      <column name="ne" hidden="0" type="field" width="-1"/>
      <column name="linha" hidden="0" type="field" width="-1"/>
      <column name="coluna" hidden="0" type="field" width="-1"/>
      <column name="regiao" hidden="0" type="field" width="-1"/>
      <column name="corretor1" hidden="0" type="field" width="-1"/>
      <column name="corretor2" hidden="0" type="field" width="-1"/>
      <column name="CQ1" hidden="0" type="field" width="-1"/>
      <column name="CQ2" hidden="0" type="field" width="-1"/>
      <column name="inicioCQ1" hidden="0" type="field" width="-1"/>
      <column name="inicioCQ2" hidden="0" type="field" width="-1"/>
      <column name="terminoCQ1" hidden="0" type="field" width="-1"/>
      <column name="terminoCQ2" hidden="0" type="field" width="-1"/>
      <column name="AdVet" hidden="0" type="field" width="-1"/>
      <column name="RevHid" hidden="0" type="field" width="-1"/>
      <column name="AqHid" hidden="0" type="field" width="-1"/>
      <column name="inicioRevHid" hidden="0" type="field" width="87"/>
      <column name="inicioAdVet" hidden="0" type="field" width="-1"/>
      <column name="inicioAqHid" hidden="0" type="field" width="159"/>
      <column name="terminoRevHid" hidden="0" type="field" width="-1"/>
      <column name="terminoAdVet" hidden="0" type="field" width="-1"/>
      <column name="terminoAqHid" hidden="0" type="field" width="-1"/>
      <column name="prioridade" hidden="0" type="field" width="-1"/>
      <column hidden="1" type="actions" width="-1"/>
    </columns>
  </attributetableconfig>
  <conditionalstyles>
    <rowstyles/>
    <fieldstyles/>
  </conditionalstyles>
  <storedexpressions/>
  <editform tolerant="1"></editform>
  <editforminit/>
  <editforminitcodesource>0</editforminitcodesource>
  <editforminitfilepath></editforminitfilepath>
  <editforminitcode><![CDATA[# -*- código: utf-8 -*-
"""
Formas QGIS podem ter uma função Python que é chamada quando o formulário é
aberto.

Use esta função para adicionar lógica extra para seus formulários.

Digite o nome da função na "função Python Init"
campo.
Um exemplo a seguir:
"""
de qgis.PyQt.QtWidgets importar QWidget

def my_form_open(diálogo, camada, feição):
	geom = feature.geometry()
	control = dialog.findChild(QWidget, "MyLineEdit")
]]></editforminitcode>
  <featformsuppress>0</featformsuppress>
  <editorlayout>generatedlayout</editorlayout>
  <editable>
    <field name="AdVet" editable="1"/>
    <field name="AqHid" editable="1"/>
    <field name="CQ1" editable="1"/>
    <field name="CQ2" editable="1"/>
    <field name="RevHid" editable="1"/>
    <field name="bloco" editable="1"/>
    <field name="coluna" editable="1"/>
    <field name="corretor1" editable="1"/>
    <field name="corretor2" editable="1"/>
    <field name="densidade" editable="1"/>
    <field name="editor" editable="1"/>
    <field name="id" editable="1"/>
    <field name="impressa" editable="1"/>
    <field name="inicio1rev" editable="1"/>
    <field name="inicio2rev" editable="1"/>
    <field name="inicioAdVet" editable="1"/>
    <field name="inicioAqHid" editable="1"/>
    <field name="inicioCQ1" editable="1"/>
    <field name="inicioCQ2" editable="1"/>
    <field name="inicioRevHid" editable="1"/>
    <field name="iniciocorrecao1" editable="1"/>
    <field name="iniciocorrecao2" editable="1"/>
    <field name="inicioedicao" editable="1"/>
    <field name="inom" editable="1"/>
    <field name="l" editable="1"/>
    <field name="ligacao" editable="1"/>
    <field name="linha" editable="1"/>
    <field name="mi" editable="1"/>
    <field name="n" editable="1"/>
    <field name="ne" editable="1"/>
    <field name="niveis" editable="1"/>
    <field name="no" editable="1"/>
    <field name="nome_carta" editable="1"/>
    <field name="o" editable="1"/>
    <field name="prioridade" editable="1"/>
    <field name="regiao" editable="1"/>
    <field name="revisor1" editable="1"/>
    <field name="revisor2" editable="1"/>
    <field name="s" editable="1"/>
    <field name="se" editable="1"/>
    <field name="servidor" editable="1"/>
    <field name="so" editable="1"/>
    <field name="status" editable="1"/>
    <field name="termino1rev" editable="1"/>
    <field name="termino2rev" editable="1"/>
    <field name="terminoAdVet" editable="1"/>
    <field name="terminoAqHid" editable="1"/>
    <field name="terminoCQ1" editable="1"/>
    <field name="terminoCQ2" editable="1"/>
    <field name="terminoRevHid" editable="1"/>
    <field name="terminocorrecao1" editable="1"/>
    <field name="terminocorrecao2" editable="1"/>
    <field name="terminoedicao" editable="1"/>
    <field name="total_a" editable="1"/>
    <field name="total_l" editable="1"/>
    <field name="total_p" editable="1"/>
    <field name="totalobj" editable="1"/>
    <field name="txt_l" editable="1"/>
    <field name="txt_p" editable="1"/>
  </editable>
  <labelOnTop>
    <field name="AdVet" labelOnTop="0"/>
    <field name="AqHid" labelOnTop="0"/>
    <field name="CQ1" labelOnTop="0"/>
    <field name="CQ2" labelOnTop="0"/>
    <field name="RevHid" labelOnTop="0"/>
    <field name="bloco" labelOnTop="0"/>
    <field name="coluna" labelOnTop="0"/>
    <field name="corretor1" labelOnTop="0"/>
    <field name="corretor2" labelOnTop="0"/>
    <field name="densidade" labelOnTop="0"/>
    <field name="editor" labelOnTop="0"/>
    <field name="id" labelOnTop="0"/>
    <field name="impressa" labelOnTop="0"/>
    <field name="inicio1rev" labelOnTop="0"/>
    <field name="inicio2rev" labelOnTop="0"/>
    <field name="inicioAdVet" labelOnTop="0"/>
    <field name="inicioAqHid" labelOnTop="0"/>
    <field name="inicioCQ1" labelOnTop="0"/>
    <field name="inicioCQ2" labelOnTop="0"/>
    <field name="inicioRevHid" labelOnTop="0"/>
    <field name="iniciocorrecao1" labelOnTop="0"/>
    <field name="iniciocorrecao2" labelOnTop="0"/>
    <field name="inicioedicao" labelOnTop="0"/>
    <field name="inom" labelOnTop="0"/>
    <field name="l" labelOnTop="0"/>
    <field name="ligacao" labelOnTop="0"/>
    <field name="linha" labelOnTop="0"/>
    <field name="mi" labelOnTop="0"/>
    <field name="n" labelOnTop="0"/>
    <field name="ne" labelOnTop="0"/>
    <field name="niveis" labelOnTop="0"/>
    <field name="no" labelOnTop="0"/>
    <field name="nome_carta" labelOnTop="0"/>
    <field name="o" labelOnTop="0"/>
    <field name="prioridade" labelOnTop="0"/>
    <field name="regiao" labelOnTop="0"/>
    <field name="revisor1" labelOnTop="0"/>
    <field name="revisor2" labelOnTop="0"/>
    <field name="s" labelOnTop="0"/>
    <field name="se" labelOnTop="0"/>
    <field name="servidor" labelOnTop="0"/>
    <field name="so" labelOnTop="0"/>
    <field name="status" labelOnTop="0"/>
    <field name="termino1rev" labelOnTop="0"/>
    <field name="termino2rev" labelOnTop="0"/>
    <field name="terminoAdVet" labelOnTop="0"/>
    <field name="terminoAqHid" labelOnTop="0"/>
    <field name="terminoCQ1" labelOnTop="0"/>
    <field name="terminoCQ2" labelOnTop="0"/>
    <field name="terminoRevHid" labelOnTop="0"/>
    <field name="terminocorrecao1" labelOnTop="0"/>
    <field name="terminocorrecao2" labelOnTop="0"/>
    <field name="terminoedicao" labelOnTop="0"/>
    <field name="total_a" labelOnTop="0"/>
    <field name="total_l" labelOnTop="0"/>
    <field name="total_p" labelOnTop="0"/>
    <field name="totalobj" labelOnTop="0"/>
    <field name="txt_l" labelOnTop="0"/>
    <field name="txt_p" labelOnTop="0"/>
  </labelOnTop>
  <dataDefinedFieldProperties/>
  <widgets/>
  <previewExpression>"nome_carta"</previewExpression>
  <mapTip></mapTip>
  <layerGeometryType>2</layerGeometryType>
</qgis>
