$(document).ready(function() {
  var _that = this;
  _that.HealthDashboardLib_prePregnancyWeight = null;
  _that.HealthDashboardLib_stepsreadings = null;
  _that.HealthDashboardLib_StatisticsLibrary_averageValue = null;
  _that.HealthDashboardLib_StatisticsLibrary_maxValue = null;
  _that.HealthDashboardLib_StatisticsLibrary_minValue = null;
  _that.HealthDashboardLib_lenofmeasurements = null;
  _that.HealthDashboardLib_tempList = null;
  _that.HealthDashboardLib_timestamplist = null;
  _that.HealthDashboardLib_endDate = null;
  _that.HealthDashboardLib_snapusername = null;
  _that.HealthDashboardLib_weightreadings = null;
  _that.HealthDashboardLib_tempDict = null;
  _that.HealthDashboardLib_timestamplistString = null;
  _that.HealthDashboardLib_bpdaysclean = null;
  _that.HealthDashboardLib_bpsystoliclist = null;
  _that.HealthDashboardLib_avgsystolic = null;
  _that.HealthDashboardLib_weightdays = null;
  _that.HealthDashboardLib_weightChange = null;
  _that.HealthDashboardLib_startDate = null;
  _that.HealthDashboardLib_stepsdays = null;
  _that.HealthDashboardLib_snapclinicalmeasurements = null;
  _that.HealthDashboardLib_bpsystolicreadings = null;
  _that.HealthDashboardLib_tempVal = null;
  _that.HealthDashboardLib_entryDict = null;
  _that.HealthDashboardLib_bysystoliclistclean = null;
  _that.HealthDashboardLib_maxsystolic = null;
  _that.HealthDashboardLib_weightlist = null;
  _that.HealthDashboardLib_bpdiastolicreadings = null;
  _that.HealthDashboardLib_bpdiastoliclistclean = null;
  _that.HealthDashboardLib_bpdiastoliclist = null;
  _that.HealthDashboardLib_minsystolic = null;
  _that.HealthDashboardLib_stepscount = null;
  _that.HealthDashboardLib_weightreadingsdict = null;
  _that.HealthDashboardLib_bpsystolicdays = null;
  _that.HealthDashboardLib_weightplot = null;
  _that.HealthDashboardLib_stepsplot = null;
  _that.HealthDashboardLib_bpsystolicreadingsdict = null;
  _that.HealthDashboardLib_bpdiatolicreadingsdict = null;
  _that.HealthDashboardLib_bpdiastolicdays = null;
  _that.HealthDashboardLib_tempString = null;
  _that.HealthDashboardLib_bpsystolicplot = null;
  _that.HealthDashboardLib_bpdiastolicplot = null;
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayDashboard() {
    return new Promise(function(resolve, reject) {
      // Block#: LroLFFFJG|e;tf$-9rD|
      HealthDashboardLib__initData().then(response => {;
      });
      // Block#: U6BBe_oX!P=C4uT2a_dG
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", true); // Block#: ~;Z5]*vL)FG7W9}0wHJ8
      $('[obj-name="connectButton"]').show(); // Block#: YpRO2@7i$TFYkLYTXv0`
      HealthDashboardLib__fetchSteps().then(response => {;
      });
      // Block#: DF2An5JY4T,8jg,xJh2m
      HealthDashboardLib__fetchMeasurements().then(response => {;
      });
      // Block#: aCuj=_%%C,tCp,@tSCzq
      com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView')
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__initData() {
    return new Promise(function(resolve, reject) {
      // Block#: j6B~)8?)o:6[KEvp2GIf
      _that.HealthDashboardLib_prePregnancyWeight = 0;
      // Block#: K,GvYj^ZUrlnI5N@i]{(
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: )dZIMhrT9_uT12fiQFHF
      _that.HealthDashboardLib_weightChange = 0;
      // Block#: 7l|A$ge-_AAMr,n?063K
      _that.HealthDashboardLib_weightreadings = [];
      // Block#: $-9[$yBF/c~D8b(ezpSN
      _that.HealthDashboardLib_bpsystolicreadings = [];
      // Block#: ~Vw(G::jGT2f(I_`lW~L
      _that.HealthDashboardLib_bpdiastolicreadings = [];
      // Block#: #V`5r1WFaLI~XW=X*v,s
      _that.HealthDashboardLib_stepsreadings = [];
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchSteps() {
    return new Promise(function(resolve, reject) {
      // Block#: *8F4uyJ{[d7r$}^=/)$l
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: HqPtpO=:XPVZKP4]3FBt
        if((com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) != null) {
          // Block#: WEqiGZloX2e;IiQXU}-g
          if(com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) {
            // Block#: fgW*dJ:/5EzOtLU|J^6{
            $('[obj-name="connectButton"]').hide(); // Block#: B~yI:,WCobkBy_xI*[`m
            HealthDashboardLib__fetchStepsFromHealthKit().then(response => {;
            });
          }
        } else {
          // Block#: M3CJ?`uAWK(`@xiDgUBv
          $('[obj-name="connectButton"]').show();
        }
      } else {
        // Block#: h}8v{`.[@lEafJBFO/0B
        if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
          // Block#: P)Fv{=+)+)!jY*xHxg7s
          $('[obj-name="connectButton"]').hide(); // Block#: Yt+kQe-[mM3Alpnf5U,D
          HealthDashboardLib__fetchStepsFromGoogleFit().then(response => {;
          });
        } else {
          // Block#: X(KCY:|A?)V=P3FZ,wlu
          $('[obj-name="connectButton"]').show();
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchStepsFromHealthKit() {
    return new Promise(function(resolve, reject) {
      // Block#: yWtu^{ciWGHzq#Ep:N_^
      _that.HealthDashboardLib_stepsreadings = [];
      // Block#: 63xB;2mBpz61ASx2Hw*n
      _that.HealthDashboardLib_endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
      // Block#: [(Egp(@Lrk[?XJpBxC:/
      _that.HealthDashboardLib_startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime(_that.HealthDashboardLib_endDate, (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 7, 0, 0))));
      // Block#: A}HyA.EYFcL#~VY;xI*U
      let _startDate = _that.HealthDashboardLib_startDate,
        _endDate = _that.HealthDashboardLib_endDate;
      if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
      if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
      com.fc.JavaScriptDistLib.HealthKit.readHistoricalData(_startDate, _endDate, [('com.apple.step_count.delta')],
        function(data) {
          // Block#: BJV8H({NGqt{~a{PKG9x
          _that.HealthDashboardLib_stepsreadings = data;
          // Block#: yrR?@I%^O.a7qZ~56d4r
          HealthDashboardLib__displaySteps().then(response => {;
          });
        },
        function(error_data) {
          // Block#: LjiUG~9:^r]hUe0-*LwK
          $('[obj-name="connectButton"]').show();
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displaySteps() {
    return new Promise(function(resolve, reject) {
      // Block#: wG}mhM{P_(Z:`Ev-v:!W
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: pz7Pc$M/(Sg-HrDXLv^B
        if((com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) != null) {
          // Block#: Pb%TZ=jfmHrif|LZbrIl
          if(com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) {
            // Block#: Ypx(NJpnj=LENp9{q[9Z
            $('[obj-name="connectButton"]').hide();
          }
        } else {
          // Block#: $/tPKStGc4qU5!J6^oPY
          $('[obj-name="connectButton"]').show();
        }
      } else {
        // Block#: _(A)Oc|g,g5C=1kGh~h!
        if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
          // Block#: /,qEjl:_83(C,/;DE7qc
          $('[obj-name="connectButton"]').hide();
        } else {
          // Block#: ~x~IXuCC.7f8z!|Hx5eg
          $('[obj-name="connectButton"]').show();
        }
      }
      // Block#: B,qq`,~OVvg#c-GWE7[7
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_stepsreadings.length, "GT", 0)) {
        // Block#: v#HF8u0uTsJ!-QN]X=@)
        _that.HealthDashboardLib_stepsdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_stepsreadings, String('$.[*].') + String('startdate')));
        // Block#: HO!ATUQs?IRd:67/H{M-
        var index_end = _that.HealthDashboardLib_stepsdays.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: _XF{k5Rs=g`+Im2JFT]R
          _that.HealthDashboardLib_stepsdays[index] = (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTimeFromTimestamp((_that.HealthDashboardLib_stepsdays[index]))), "DATE_US"));
        }
        // Block#: +z[Hv/]}wEfPdvf=li=N
        _that.HealthDashboardLib_stepscount = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_stepsreadings, String('$.[*].') + String('steps')));
        // Block#: ZP/P|aEzY/[H,A:=.3Z4
        _that.HealthDashboardLib_stepsplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('stepsgraph', _that.HealthDashboardLib_stepsdays, _that.HealthDashboardLib_stepscount, 'steps'));
        // Block#: zF{R|{NqrQ;Gg?[9WOWb
        _that.HealthDashboardLib_stepsplot // Block#: sX)]$@ZIfpFhN(#yB`N0
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('stepsgraph', 500, 500); // Imported from Lib: StatisticsLibrary
        // Block#: `_7m:2p:(uHq+rFEk!KB
        HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: trib41L=?l.)`$9n:P6O
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: ~%`FT4/eIWo.otCDUp**
        HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: AILb/OO?!o{po8FMUJPa
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: ?^V+2RdZuOi[}#Un*;Tn
        HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: XTu19-qu=f|5F{?yxxLC
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
          }
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__average(list) {
    return new Promise(function(resolve, reject) {
      // Block#: 99YE!yte3t7Tjm`GT0mB
      _that.HealthDashboardLib_StatisticsLibrary_averageValue = 0;
      // Block#: `115}W*Lfr:u]7~YX?J6
      var index_end2 = list.length - 1;
      var index_inc2 = 1;
      if(0 > index_end2) {
        index_inc2 = -index_inc2;
      }
      for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
        // Block#: jOP?b1{dR?y~OvjGv}M+
        _that.HealthDashboardLib_StatisticsLibrary_averageValue = _that.HealthDashboardLib_StatisticsLibrary_averageValue + list[index];
      }
      // Block#: f_VyNJfIH#dH-Prq?iOY
      if(list.length != 0) {
        // Block#: ZJ6!WBBiH2^q7/OnpZi3
        _that.HealthDashboardLib_StatisticsLibrary_averageValue = _that.HealthDashboardLib_StatisticsLibrary_averageValue / list.length;
        // Block#: QAG285RL/,4T82Tx0xtc
        resolve({
          name: "value",
          data: _that.HealthDashboardLib_StatisticsLibrary_averageValue
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__max(list) {
    return new Promise(function(resolve, reject) {
      // Block#: $6nO|{jxUQXM{0^g~.T]
      _that.HealthDashboardLib_StatisticsLibrary_maxValue = list[0];
      // Block#: *x.Y8aUaOZ-[2rN(mW^=
      var index_end3 = list.length - 1;
      var index_inc3 = 1;
      if(0 > index_end3) {
        index_inc3 = -index_inc3;
      }
      for(index = 0; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
        // Block#: G:(9R_/QZghFAuZxGooS
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "GT", _that.HealthDashboardLib_StatisticsLibrary_maxValue)) {
          // Block#: YkxU}2!aAFa:IXygCA?0
          _that.HealthDashboardLib_StatisticsLibrary_maxValue = list[index];
        }
      }
      // Block#: )^@Bh6$U?r!5PTSkUFMk
      resolve({
        name: "value",
        data: _that.HealthDashboardLib_StatisticsLibrary_maxValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__min(list) {
    return new Promise(function(resolve, reject) {
      // Block#: +V?T$4x6j)7U==o$IAwq
      _that.HealthDashboardLib_StatisticsLibrary_minValue = list[0];
      // Block#: zBWWS2.+K4798[s{vTst
      var index_end4 = list.length - 1;
      var index_inc4 = 1;
      if(0 > index_end4) {
        index_inc4 = -index_inc4;
      }
      for(index = 0; index_inc4 >= 0 ? index <= index_end4 : index >= index_end4; index += index_inc4) {
        // Block#: U@DcT2*CxD$fj[hF7MlI
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "LT", _that.HealthDashboardLib_StatisticsLibrary_minValue)) {
          // Block#: Lf4C|.03!L7[u{z]_IU@
          _that.HealthDashboardLib_StatisticsLibrary_minValue = list[index];
        }
      }
      // Block#: RrO:2RyR]fsF5g2`xM,6
      resolve({
        name: "value",
        data: _that.HealthDashboardLib_StatisticsLibrary_minValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchStepsFromGoogleFit() {
    return new Promise(function(resolve, reject) {
      // Block#: ghPpd*l?5^#=VP*._b+n
      _that.HealthDashboardLib_stepsreadings = [];
      // Block#: 2%rzaMhpgwFuJ^.(4`HF
      _that.HealthDashboardLib_endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
      // Block#: )bM:axH9A7OP{!o$%#L+
      _that.HealthDashboardLib_startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime(_that.HealthDashboardLib_endDate, (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 7, 0, 0))));
      // Block#: sGl$!!/BzXQxCZ;:-6={
      let _startDate = _that.HealthDashboardLib_startDate,
        _endDate = _that.HealthDashboardLib_endDate;
      if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
      if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
      com.fc.JavaScriptDistLib.GoogleFit.readHistoricalData(_startDate, _endDate, [('com.google.step_count.delta')],
        function(data) {
          // Block#: ]/7AtI:hc}]^}4I~5pt%
          _that.HealthDashboardLib_stepsreadings = data;
          // Block#: :eH73oop0:-|`G+bGml`
          HealthDashboardLib__displaySteps().then(response => {;
          });
        },
        function(error_data) {
          // Block#: s$I:V%A[n9I7pCZg-Jv{
          $('[obj-name="connectButton"]').show(); // Block#: r[O#ao15v/h;]oRmqoM.
          com.fc.JavaScriptDistLib.GoogleFit.deAuthorize();
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchMeasurements() {
    return new Promise(function(resolve, reject) {
      // Block#: yW-bRs?-ko]pNM)b!n*4
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whoAmI', "GET", JSON.stringify(),
        function(data) {
          // Block#: Lfxq*dzx8A*cU@TluHo?
          _that.HealthDashboardLib_snapusername = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'username'));
          // Block#: yUOd1$G/_:BPT3}Uo`{%
          console.log(String('Snapclinical whoAmI response is ') + String(_that.HealthDashboardLib_snapusername));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('Snapclinical whoAmI response is ') + String(_that.HealthDashboardLib_snapusername));
            _that.debugService.printLog();
          }
          // Block#: @q$0!$-rtcYHHWpn+!`j
          com.fc.JavaScriptDistLib.SnapClinical.fetch((['/snap-api/measurements/search/findbyUsername?username=', _that.HealthDashboardLib_snapusername, '&size=500'].join('')), "GET", JSON.stringify(),
            function(data) {
              // Block#: [bhg-$/I?,x$]#7Wx$/Z
              console.log('measurement success');
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push('measurement success');
                _that.debugService.printLog();
              }
              // Block#: EIn:F|VuWbvzLNrFjoeP
              console.log(data);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(data);
                _that.debugService.printLog();
              }
              // Block#: {!Jd3aXgt7--Su.bJpzC
              console.log(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
                _that.debugService.printLog();
              }
              // Block#: iWh5,H,?-`9A5*]V8gJI
              _that.HealthDashboardLib_snapclinicalmeasurements = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
              // Block#: Y_BqJlgsc2k?UsrK##Hz
              if(!(_that.HealthDashboardLib_snapclinicalmeasurements == null)) {
                // Block#: #]k[VvW+k+,]^jmPwO|m
                if(!!_that.HealthDashboardLib_snapclinicalmeasurements.length) {
                  // Block#: 0~z!DxO%Gl#$Ke:?hY#x
                  HealthDashboardLib__parseMeasurements().then(response => {;
                  });
                } else {
                  // Block#: `dxR/)i0$_W[%#I3qd[d
                  com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
                }
              } else {
                // Block#: Pu=^To]~8o(29$If:9#V
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
              }
            },
            function(error) {
              // Block#: O(_abefMN)deiu(GGAZB
              console.log(error);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(error);
                _that.debugService.printLog();
              }
              // Block#: /?S?A5UUj=yzG_hY.e4T
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
            });
        },
        function(error) {
          // Block#: 9XD8*3FmZY}?3`vgUg?5
          console.log(error);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error);
            _that.debugService.printLog();
          }
          // Block#: vK(|A.!N]K`t!HZDS(X`
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__parseMeasurements() {
    return new Promise(function(resolve, reject) {
      // Block#: :|U2@[bErv[n=L#c5CR*
      _that.HealthDashboardLib_lenofmeasurements = _that.HealthDashboardLib_snapclinicalmeasurements.length;
      // Block#: :F1UaK}`ZVU+|gLD_DLs
      _that.HealthDashboardLib_weightreadings = [];
      // Block#: myHZgldUNh/Wmj4VN1#k
      _that.HealthDashboardLib_bpsystolicreadings = [];
      // Block#: D(|`p]5%xR(D/GwCc`!D
      _that.HealthDashboardLib_bpdiastolicreadings = [];
      // Block#: Xp6[hSx6MiKgw|4H.~$`
      _that.HealthDashboardLib_weightreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: 0pMk.ND[Q]V:e]l;8wa_
      _that.HealthDashboardLib_bpsystolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: tm_.;(GJuRMfXpaVRX,[
      _that.HealthDashboardLib_bpdiatolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: SQzu$iqtV8gqX83)*Oty
      var index_end5 = _that.HealthDashboardLib_lenofmeasurements - 1;
      var index_inc5 = 1;
      if(0 > index_end5) {
        index_inc5 = -index_inc5;
      }
      for(index = 0; index_inc5 >= 0 ? index <= index_end5 : index >= index_end5; index += index_inc5) {
        // Block#: y)jXfuH)YNz1V*r0_%+N
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr')) {
          // Block#: ;~):upU4ZGVx,KTwKhi|
          _that.HealthDashboardLib_entryDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['timestamp', 'value'], [HealthDashboardLib__getFormattedTime((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'timestamp'))), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'value'))]);
          // Block#: 9C$LUq|^1Ea,PAvy1)_?
          if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Body weight')) {
            // Block#: z!8$K:?~lOrhw$pT(N`n
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_weightreadingsdict).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Systolic blood pressure')) {
            // Block#: S.21:Nv_WexLU=Gko7D`
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_bpsystolicreadingsdict).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Diastolic blood pressure')) {
            // Block#: !56Mgl$4v6RnJ_k]]kj3
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_bpdiatolicreadingsdict).then(response => {;
            });
          }
        }
      }
      // Block#: +kpN5#L]Oi=O13uU(2([
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_weightreadingsdict, _that.HealthDashboardLib_weightreadings).then(response => {;
      });
      // Block#: e|t8o,#+N}LU/2fHlBgX
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_bpsystolicreadingsdict, _that.HealthDashboardLib_bpsystolicreadings).then(response => {;
      });
      // Block#: (oHXt/]r7o^2OZ)k`UQM
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_bpdiatolicreadingsdict, _that.HealthDashboardLib_bpdiastolicreadings).then(response => {;
      });
      // Block#: TH:[]sFv3!%bH]yX.3ek
      HealthDashboardLib__displayBP().then(response => {;
      });
      // Block#: cd9Fl8k{w%a}c,GRwP%|
      HealthDashboardLib__displayWeight().then(response => {;
      });
      // Block#: cf0giTo^}9:8-:uwCVt)
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false); // Block#: :7o?UnH+m4VN.SW{:HR_
      com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView')
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__getFormattedTime(timestring) {
    // Block#: p2_GRWjJu2npj*:OE%h%
    _that.HealthDashboardLib_tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(timestring, 'T')[0];
    // Block#: ]?aSm~KF_#|Lfpj1DKj%
    _that.HealthDashboardLib_tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(_that.HealthDashboardLib_tempList, '-');
    return [_that.HealthDashboardLib_tempList[1], '/', _that.HealthDashboardLib_tempList.slice(-1)[0], '/', _that.HealthDashboardLib_tempList[0]].join('');
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__appendReadings(datareadingsdict) {
    return new Promise(function(resolve, reject) {
      // Block#: qMM(jMi6],4$[PVcam!#
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'))) {
        // Block#: nk[:-V!KBTj:Al@l|D87
        _that.HealthDashboardLib_tempDict = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp')));
        // Block#: B3=@sNd{2z#WHlyX8P|P
        _that.HealthDashboardLib_tempVal = ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'value')) + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_tempDict, 'value'))) / 2;
        // Block#: ;Vq?OAJkNy`/TeHFMQ(x
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.HealthDashboardLib_tempDict, 'value', _that.HealthDashboardLib_tempVal);
        // Block#: zs:AOj!PB[-%F5f:e,z=
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'), _that.HealthDashboardLib_tempDict);
      } else {
        // Block#: Zrwe]VMg2R5Br5eT)duw
        _that.HealthDashboardLib_tempDict = _that.HealthDashboardLib_entryDict;
      }
      // Block#: kH{_W@Wsyn6@uB#+1PS)
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'), _that.HealthDashboardLib_tempDict);
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__sortReadings(datareadingsdict, datareadingslist) {
    return new Promise(function(resolve, reject) {
      // Block#: er[B)YP/$=$.f^i/dv:7
      _that.HealthDashboardLib_timestamplist = [];
      // Block#: /Xt6KW)LQ?fC]K|]A*hZ
      _that.HealthDashboardLib_timestamplistString = (com.fc.JavaScriptDistLib.Dictionary.getKeys(datareadingsdict));
      // Block#: ,xv4z;[IFKRB4u=qz[@_
      _that.HealthDashboardLib_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: {-3}iIQ5_t%#@^O!bc)=
      if(!!_that.HealthDashboardLib_timestamplistString.length) {
        // Block#: c7Wq[j{5KvMX~8@9X(~p
        var index_end6 = _that.HealthDashboardLib_timestamplistString.length - 1;
        var index_inc6 = 1;
        if(0 > index_end6) {
          index_inc6 = -index_inc6;
        }
        for(index = 0; index_inc6 >= 0 ? index <= index_end6 : index >= index_end6; index += index_inc6) {
          // Block#: O:(S{HGXg9PqPL+3nr%%
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_timestamplist, (com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((_that.HealthDashboardLib_timestamplistString[index]))))))
          // Block#: gD`ZeBo_HbJl92kDa!hR
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.HealthDashboardLib_tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((_that.HealthDashboardLib_timestamplistString[index]))))), _that.HealthDashboardLib_timestamplistString[index]);
        }
        // Block#: S/Xn?PBC`ql]b:;P{+-C
        com.fc.JavaScriptDistLib.ListLibrary.listOrder(_that.HealthDashboardLib_timestamplist, 'ASCENDING')
        // Block#: H|1(Ll%gcK1]utx3fG4/
        var index_end7 = _that.HealthDashboardLib_timestamplist.length - 1;
        var index_inc7 = 1;
        if(0 > index_end7) {
          index_inc7 = -index_inc7;
        }
        for(index = 0; index_inc7 >= 0 ? index <= index_end7 : index >= index_end7; index += index_inc7) {
          // Block#: o~uezMgH17FK9P6HHtzg
          _that.HealthDashboardLib_tempString = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_timestamplist[index])));
          // Block#: Lr$bvNR!CLKm=8qlYxI2
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(datareadingslist, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, _that.HealthDashboardLib_tempString)))
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayBP() {
    return new Promise(function(resolve, reject) {
      // Block#: ,y(dE=.opXJ,~xVw=1{|
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_bpsystolicreadings.length, "GT", 0)) {
        // Block#: 2WVX%X9}S@MJ!%{lz0M(
        _that.HealthDashboardLib_bpdaysclean = [];
        // Block#: oo%p!cBUPC%jA|19HB+4
        _that.HealthDashboardLib_bysystoliclistclean = [];
        // Block#: x}K^v7IIKaD^jnX)4U^L
        _that.HealthDashboardLib_bpdiastoliclistclean = [];
        // Block#: iL;8W8A;nZtRd:tpxLr;
        _that.HealthDashboardLib_bpsystolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpsystolicreadings, String('$.[*].') + String('timestamp')));
        // Block#: NO@7Li~LSy|xHqPn[W/*
        _that.HealthDashboardLib_bpsystoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpsystolicreadings, String('$.[*].') + String('value')));
        // Block#: AL_S*7{(9mZeJ9DF%K1n
        _that.HealthDashboardLib_bpdiastolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpdiastolicreadings, String('$.[*].') + String('timestamp')));
        // Block#: 9mroWq-7G!)lGIaGA@Q/
        _that.HealthDashboardLib_bpdiastoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpdiastolicreadings, String('$.[*].') + String('value')));
        // Block#: iS#pXY=P!lwiaUsd#2}Q
        var index_end8 = _that.HealthDashboardLib_bpdiastolicdays.length - 1;
        var index_inc8 = 1;
        if(0 > index_end8) {
          index_inc8 = -index_inc8;
        }
        for(index = 0; index_inc8 >= 0 ? index <= index_end8 : index >= index_end8; index += index_inc8) {
          // Block#: z@d%pHYEF=,R:Su3[0:6
          _that.HealthDashboardLib_tempString = _that.HealthDashboardLib_bpdiastolicdays[index];
          // Block#: BQ8bAdrv~,qw5orf4znU
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains(_that.HealthDashboardLib_bpsystolicdays, _that.HealthDashboardLib_tempString)) {
            // Block#: rHGmHB}g*834+K.TYn7F
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_tempString)
            // Block#: ti$D8wSZ!.*2)p-MYN[/
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bpdiastoliclistclean, _that.HealthDashboardLib_bpdiastoliclist[index])
          }
        }
        // Block#: a-}5]WnX~N!u9YV)A,C{
        var index_end9 = _that.HealthDashboardLib_bpsystolicdays.length - 1;
        var index_inc9 = 1;
        if(0 > index_end9) {
          index_inc9 = -index_inc9;
        }
        for(index = 0; index_inc9 >= 0 ? index <= index_end9 : index >= index_end9; index += index_inc9) {
          // Block#: mkJ!)5Ug4t%O-Tv8b3@n
          _that.HealthDashboardLib_tempString = _that.HealthDashboardLib_bpsystolicdays[index];
          // Block#: 8%i3I=ni5V|+Mlvs*Qf%
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains(_that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_tempString)) {
            // Block#: Zl?V`Fl1ia!U#;?OqJ[U
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bysystoliclistclean, _that.HealthDashboardLib_bpsystoliclist[index])
          }
        }
        // Block#: Aj+5LK#Y@z}y#bAs2D/s
        _that.HealthDashboardLib_bpsystolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', _that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_bysystoliclistclean, 'bpsystolic'));
        // Block#: `S[XD#btT1E~Sj;TiOt:
        _that.HealthDashboardLib_bpdiastolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', _that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_bpdiastoliclistclean, 'bpdiastolic'));
        // Block#: T/+-6{Dp=ytQ1D[o7Z3k
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdaysclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdaysclean));
          _that.debugService.printLog();
        }
        // Block#: ~!OB`8i`JC-y=GYsSqo3
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bysystoliclistclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bysystoliclistclean));
          _that.debugService.printLog();
        }
        // Block#: _=a?h)r.#bNp:;$^UTu^
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdiastoliclistclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdiastoliclistclean));
          _that.debugService.printLog();
        }
        // Block#: wfSL;K.%VO]J+;A]x@kS
        _that.HealthDashboardLib_bpsystolicplot // Block#: Bnu;Y|`:_taj~ePIkkH3
        _that.HealthDashboardLib_bpdiastolicplot // Block#: 3=qw*9RwkW{lSu3l3e{;
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('bpgraph', 500, 500); // Block#: aBPalcYHEml7mfibV3uY
        HealthDashboardLib__computeStatsForBP().then(response => {;
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__computeStatsForBP() {
    return new Promise(function(resolve, reject) {
      // Imported from Lib: StatisticsLibrary
      // Block#: l)YXeyLfJb#:#3%QGS~7
      HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: e-zvvS5.2w(sc8MPv#Eb
          _that.HealthDashboardLib_avgsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: z*_qw|C{;J6gF!/^0nXr
          HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: r;1X~{C=rS)ly(_yV0G:
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgbpvalue", ([_that.HealthDashboardLib_avgsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: 9Tj$}q$.=?4NO=NrqYw~
      HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: xJzo6u5Lgv?h4Fb@{m@`
          _that.HealthDashboardLib_maxsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: %wteB4W01fF|C$|QNG6n
          HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: ?{5THS`CyRxTxd-Nwm%Q
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxbpvalue", ([_that.HealthDashboardLib_maxsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: v]_zfLEs,dj_%9ANrLD)
      HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: [])#ppE8*k1w`PKyJ:*8
          _that.HealthDashboardLib_minsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: IGG/8Gp(UG_eE)C?$m3a
          HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: XNxn+9gjCLW`|a]-LX2U
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minbpvalue", ([_that.HealthDashboardLib_minsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayWeight() {
    return new Promise(function(resolve, reject) {
      // Block#: ZsWm;3%tTgW~E#t2+A!r
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightreadings.length, "GT", 0)) {
        // Block#: -n~{ez`gLZ6I/%rQ~+pT
        _that.HealthDashboardLib_weightdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_weightreadings, String('$.[*].') + String('timestamp')));
        // Block#: v]57!C)Z[cOHcWskU9KO
        _that.HealthDashboardLib_weightlist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_weightreadings, String('$.[*].') + String('value')));
        // Block#: aSu7.CirWmI2=z[wJjN`
        var index_end10 = _that.HealthDashboardLib_weightlist.length - 1;
        var index_inc10 = 1;
        if(0 > index_end10) {
          index_inc10 = -index_inc10;
        }
        for(index = 0; index_inc10 >= 0 ? index <= index_end10 : index >= index_end10; index += index_inc10) {
          // Block#: tyS?~:izOX`K7)y.fa7!
          _that.HealthDashboardLib_weightlist[index] = HealthDashboardLib__toPounds(_that.HealthDashboardLib_weightlist[index]);
        }
        // Block#: bja7W`cBq)S=f%,(i=6A
        _that.HealthDashboardLib_weightplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('weightgraph', _that.HealthDashboardLib_weightdays, _that.HealthDashboardLib_weightlist, 'weight'));
        // Block#: |{a]ugL!,fZ:-.]yM:J+
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_prePregnancyWeight, "GT", 0)) {
          // Block#: _R0bKTx.~q+Ul}*P}Ij7
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Pre Pregnancy Weight'); // Block#: UYYncaJ8s;:sqB(]9?Oa
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_prePregnancyWeight)));
        } else {
          // Block#: azlL*e/{/V?=LUCyqpD0
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: cP/`,q,_FdU%^?Z2:,9h
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(_that.HealthDashboardLib_weightlist[0]))));
        }
        // Block#: D:OxEy1,:-g.9hf_2g5J
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("CurrentWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(_that.HealthDashboardLib_weightlist.slice(-1)[0])))); // Block#: c4;=hw(HKPfc$qU3J]Dx
        _that.HealthDashboardLib_weightChange = Math.round((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("CurrentWeightValue"))) - (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("InitialWeightValue"))));
        // Block#: X0^?b^.5$4nY7Cf7nXw!
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightChange, "GT", 0)) {
          // Block#: 95lHH+7ON0`;zdla~i2=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange))); // Block#: w8OV~kdvf!skO0`[%|a=
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '+');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightChange, "LT", 0)) {
          // Block#: bg}i443)EChH!Qy4mcob
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange * -1))); // Block#: -4EnK9vau`XDDeM!H+dg
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '-');
        } else {
          // Block#: eu~*,X=Fn,s?K4~cxuHv
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange))); // Block#: Vg79J2~PmMIe_o^,4.n-
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '');
        }
        // Block#: Ogj:Oyq-Q,a@dUK#=6v-
        _that.HealthDashboardLib_weightplot // Block#: _=6966qK/.Eh[ohyY_Ue
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('weightgraph', 500, 500);
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__toPounds(weightKg) {
    return weightKg * 2.20462;
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__setPrePregnancyWeight(weight) {
    return new Promise(function(resolve, reject) {
      // Block#: Xx1,k.3h.v{QXjC1LSj-
      _that.HealthDashboardLib_prePregnancyWeight = weight;
      // Block#: 3)s*V@bu|NR~Nj`9/^4n
      com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView') // Block#: 2ZC*dWI]kIMT$t^xi}f(
      console.log(String('Pre-Pregnancy Weight: ') + String(_that.HealthDashboardLib_prePregnancyWeight));
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(String('Pre-Pregnancy Weight: ') + String(_that.HealthDashboardLib_prePregnancyWeight));
        _that.debugService.printLog();
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__isGoogleFitAuthorized() {
    return com.fc.JavaScriptDistLib.GoogleFit.isAuthorized();
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__authorize(dataTypesList) {
    return new Promise(function(resolve, reject) {
      // Block#: Jkc]WZm,~Zw/F{=y-4Zr
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: `0czE}}0?qNE0sspXlSR
        com.fc.JavaScriptDistLib.HealthKit.authorize(dataTypesList,
          function() {
            // Block#: =|O^V2%Wo3bVPc-]{1TP
            com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', true) // Block#: AbP-r}z-=XRnI-V5q@to
            resolve({
              name: "success",
              data: null
            });
          },
          function(error_data) {
            // Block#: 6]{wnIJ^^eBlKdC~vVDA
            resolve({
              name: "Error",
              data: error_data
            });
          });
      } else {
        // Block#: Vy_*vczm(c:zCrbZRd+j
        com.fc.JavaScriptDistLib.GoogleFit.authorize(dataTypesList, '847927879972-v2joor7mfejbha82er8dg72jpoh7jnb8.apps.googleusercontent.com', 'ZmzKVKXSJ5Y2BLvCTEAgND7d', 'https://develop.snapp.click',
          function() {
            // Block#: Vz1bLljI}l*6]B:RRyQ:
            com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', false) // Block#: Th#)1IN#h4hlNK@!Rtyy
            resolve({
              name: "success",
              data: null
            });
          },
          function(error_data) {
            // Block#: x]OP7?QIYDEkx4)gcK7W
            resolve({
              name: "Error",
              data: error_data
            });
          });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayDashboard2() {
    return new Promise(function(resolve, reject) {
      // Block#: tn/%sb5IY2Ws1}_P-XTG
      HealthDashboardLib__initData().then(response => {;
      });
      // Block#: a|!@P;v=d(~_gTR1zcCE
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", true); // Block#: o_mb4hwwGg{`jhVY3/JT
      $('[obj-name="connectButton"]').show(); // Block#: g0mjSc*!nGu8KsjGh@59
      HealthDashboardLib__fetchSteps().then(response => {;
      });
      // Block#: t|~mMFyv+e?W}P4P4Ra~
      HealthDashboardLib__fetchMeasurements().then(response => {;
      });
      // Block#: @{_U}tZXQ0ww[_KXmJdm
      com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView')
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__initData2() {
    return new Promise(function(resolve, reject) {
      // Block#: 9]beLa0#t:s)FXRa::^E
      _that.HealthDashboardLib_prePregnancyWeight = 0;
      // Block#: %P*a6=J]L+%Mv^bK[rCW
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: |]@,+s_KX@o6YL#SuL#:
      _that.HealthDashboardLib_weightChange = 0;
      // Block#: Ywe9s;[KRSeJPV={b6di
      _that.HealthDashboardLib_weightreadings = [];
      // Block#: |KKO`orIU82TxEVr_ZET
      _that.HealthDashboardLib_bpsystolicreadings = [];
      // Block#: `o#cF}AvTA^SdHbVxFu8
      _that.HealthDashboardLib_bpdiastolicreadings = [];
      // Block#: wuGB**c9ATXFVF?X75-@
      _that.HealthDashboardLib_stepsreadings = [];
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchSteps2() {
    return new Promise(function(resolve, reject) {
      // Block#: O%_-4M]e1?mHf,0Mr*V-
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: GzqCl@s|dk+g#H9D/XXd
        if((com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) != null) {
          // Block#: 0Z9s6[[--Q]!h),gC!b(
          if(com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) {
            // Block#: @#?bl~-(Q5Sk18$di}XR
            $('[obj-name="connectButton"]').hide(); // Block#: O{NUwxU.fk1=VYU=Pu$m
            HealthDashboardLib__fetchStepsFromHealthKit().then(response => {;
            });
          }
        } else {
          // Block#: oJq*f`hAjakykicVNGcS
          $('[obj-name="connectButton"]').show();
        }
      } else {
        // Block#: O1[o:J7^J$Sx6BF{.$_]
        if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
          // Block#: (cC,=YE=:bIWp/UZAADd
          $('[obj-name="connectButton"]').hide(); // Block#: ~,V`5?$A9pEk:{U/_``j
          HealthDashboardLib__fetchStepsFromGoogleFit().then(response => {;
          });
        } else {
          // Block#: Wk``J[n~9Js/Aw[4=,GX
          $('[obj-name="connectButton"]').show();
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchStepsFromHealthKit2() {
    return new Promise(function(resolve, reject) {
      // Block#: @bA.hD9pi{$1Wy5?8@n`
      _that.HealthDashboardLib_stepsreadings = [];
      // Block#: 8AIyk%w/xjOD[+PS|x36
      _that.HealthDashboardLib_endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
      // Block#: yM+XPWREW|+UHiwDP.]Y
      _that.HealthDashboardLib_startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime(_that.HealthDashboardLib_endDate, (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 7, 0, 0))));
      // Block#: Zt1^d7UUYV(v;W,*yk%z
      let _startDate = _that.HealthDashboardLib_startDate,
        _endDate = _that.HealthDashboardLib_endDate;
      if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
      if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
      com.fc.JavaScriptDistLib.HealthKit.readHistoricalData(_startDate, _endDate, [('com.apple.step_count.delta')],
        function(data) {
          // Block#: pReBF}EI@:BTWA@{PiF`
          _that.HealthDashboardLib_stepsreadings = data;
          // Block#: @8Lovk-?1$v-RLq{vKls
          HealthDashboardLib__displaySteps().then(response => {;
          });
        },
        function(error_data) {
          // Block#: 4Uqi%3U!)c$es{]9Gae;
          $('[obj-name="connectButton"]').show();
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displaySteps2() {
    return new Promise(function(resolve, reject) {
      // Block#: xm7xfhgyZ~cK4!;gVG!6
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: $*f)0Age~LNds[mbtVVR
        if((com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) != null) {
          // Block#: |%m_ae::5J^C-Jhx^/lK
          if(com.fc.JavaScriptDistLib.Storage.getValue('isHealthKitAuthorized')) {
            // Block#: 5DclP@mO?RE8h7wo+Z7e
            $('[obj-name="connectButton"]').hide();
          }
        } else {
          // Block#: dp9u|k79^}yn?;bM5vfF
          $('[obj-name="connectButton"]').show();
        }
      } else {
        // Block#: SPaq9~DQ#R%sb:Ztho$^
        if(com.fc.JavaScriptDistLib.GoogleFit.isAuthorized()) {
          // Block#: :R*}C_[d0_99%7Yw^KIv
          $('[obj-name="connectButton"]').hide();
        } else {
          // Block#: n(2W#rN?4vWig)^)2q3|
          $('[obj-name="connectButton"]').show();
        }
      }
      // Block#: %5YYEPs=RDMT}/9o~8?[
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_stepsreadings.length, "GT", 0)) {
        // Block#: V5xtUzB#3b8r$EVe`wB@
        _that.HealthDashboardLib_stepsdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_stepsreadings, String('$.[*].') + String('startdate')));
        // Block#: Ery-G3c=DA{XV38-mN_g
        var index_end11 = _that.HealthDashboardLib_stepsdays.length - 1;
        var index_inc11 = 1;
        if(0 > index_end11) {
          index_inc11 = -index_inc11;
        }
        for(index = 0; index_inc11 >= 0 ? index <= index_end11 : index >= index_end11; index += index_inc11) {
          // Block#: bkP6R0_B0%LH+bDeniwO
          _that.HealthDashboardLib_stepsdays[index] = (com.fc.JavaScriptDistLib.TimeLibrary.textFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTimeFromTimestamp((_that.HealthDashboardLib_stepsdays[index]))), "DATE_US"));
        }
        // Block#: ${KL_JK!2:$m*e~!m/$*
        _that.HealthDashboardLib_stepscount = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_stepsreadings, String('$.[*].') + String('steps')));
        // Block#: !YGzo8T)_$XBx/gd1W|l
        _that.HealthDashboardLib_stepsplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('stepsgraph', _that.HealthDashboardLib_stepsdays, _that.HealthDashboardLib_stepscount, 'steps'));
        // Block#: eB@-,2zq?=c-%8F::2F=
        _that.HealthDashboardLib_stepsplot // Block#: ZYBf1!tY.#G(9!BW[)Ge
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('stepsgraph', 500, 500); // Imported from Lib: StatisticsLibrary
        // Block#: C[Cnz9g_p_447_h:KGy!
        HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: :L5Rb*$bt}cgB|Y%}#BT
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data))));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: b]QMp:HJ^g!.}`^vRWXd
        HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: :hko^^POm=324e9k|ww#
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
          }
        });
        // Imported from Lib: StatisticsLibrary
        // Block#: L%W`I_rCN6H)(i!;giqW
        HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_stepscount).then(response => {;
          if(response.name === "value") {
            // Block#: 1+,?K[KhzNKBr=_3~JIe
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minreadingvalue", (com.fc.JavaScriptDistLib.TextLib.convertToText(response.data)));
          }
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__average2(list) {
    return new Promise(function(resolve, reject) {
      // Block#: +$2BBUT}c.a}k5DMzADK
      _that.HealthDashboardLib_StatisticsLibrary_averageValue = 0;
      // Block#: XA@AVN7#yPdVQ5L^+Z8t
      var index_end12 = list.length - 1;
      var index_inc12 = 1;
      if(0 > index_end12) {
        index_inc12 = -index_inc12;
      }
      for(index = 0; index_inc12 >= 0 ? index <= index_end12 : index >= index_end12; index += index_inc12) {
        // Block#: M+j~}#)yxlI)|yAVty7b
        _that.HealthDashboardLib_StatisticsLibrary_averageValue = _that.HealthDashboardLib_StatisticsLibrary_averageValue + list[index];
      }
      // Block#: 3.yy:~$:/oLxoG;r+P_i
      if(list.length != 0) {
        // Block#: %+{:9%9qpN].{B#Y;gTd
        _that.HealthDashboardLib_StatisticsLibrary_averageValue = _that.HealthDashboardLib_StatisticsLibrary_averageValue / list.length;
        // Block#: JoDq?=+q-2ZydM8Iwto?
        resolve({
          name: "value",
          data: _that.HealthDashboardLib_StatisticsLibrary_averageValue
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__max2(list) {
    return new Promise(function(resolve, reject) {
      // Block#: K$L8;3MhnK6oKbzG1@df
      _that.HealthDashboardLib_StatisticsLibrary_maxValue = list[0];
      // Block#: S4JXp4juOwij:-%2b9Hi
      var index_end13 = list.length - 1;
      var index_inc13 = 1;
      if(0 > index_end13) {
        index_inc13 = -index_inc13;
      }
      for(index = 0; index_inc13 >= 0 ? index <= index_end13 : index >= index_end13; index += index_inc13) {
        // Block#: [ug`TS*L;4v/#[?X=X35
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "GT", _that.HealthDashboardLib_StatisticsLibrary_maxValue)) {
          // Block#: LyA?7i]]0vr@qZLL!_Z8
          _that.HealthDashboardLib_StatisticsLibrary_maxValue = list[index];
        }
      }
      // Block#: AA1.T)/L[fb#(q58}(%n
      resolve({
        name: "value",
        data: _that.HealthDashboardLib_StatisticsLibrary_maxValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__StatisticsLibrary__min2(list) {
    return new Promise(function(resolve, reject) {
      // Block#: KJ[fUbC*a|3,;Ywh=C57
      _that.HealthDashboardLib_StatisticsLibrary_minValue = list[0];
      // Block#: {jl#MN*)(2vlSmP{znGq
      var index_end14 = list.length - 1;
      var index_inc14 = 1;
      if(0 > index_end14) {
        index_inc14 = -index_inc14;
      }
      for(index = 0; index_inc14 >= 0 ? index <= index_end14 : index >= index_end14; index += index_inc14) {
        // Block#: t[e,,-mmfp($}rOIz)sd
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(list[index], "LT", _that.HealthDashboardLib_StatisticsLibrary_minValue)) {
          // Block#: -ANj8LkA(]]tyy^p,=g9
          _that.HealthDashboardLib_StatisticsLibrary_minValue = list[index];
        }
      }
      // Block#: D9fkeNA|[Cu!vXlXe7#y
      resolve({
        name: "value",
        data: _that.HealthDashboardLib_StatisticsLibrary_minValue
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchStepsFromGoogleFit2() {
    return new Promise(function(resolve, reject) {
      // Block#: ,Rd#q`n#N6+]4m5::Cia
      _that.HealthDashboardLib_stepsreadings = [];
      // Block#: l=Gwy03wqSv!Nu(mM5W#
      _that.HealthDashboardLib_endDate = (com.fc.JavaScriptDistLib.MomentLibrary());
      // Block#: 1E0evXTXEzk*?hQm[wU[
      _that.HealthDashboardLib_startDate = (com.fc.JavaScriptDistLib.TimeLibrary.subtractIntervalFromTime(_that.HealthDashboardLib_endDate, (com.fc.JavaScriptDistLib.TimeLibrary.createTimeInterval(0, 0, 0, 7, 0, 0))));
      // Block#: r)p.SxOi;R+cf|ZPsYr3
      let _startDate = _that.HealthDashboardLib_startDate,
        _endDate = _that.HealthDashboardLib_endDate;
      if(!(_startDate instanceof Date)) _startDate = _startDate.toDate();
      if(!(_endDate instanceof Date)) _endDate = _endDate.toDate();
      com.fc.JavaScriptDistLib.GoogleFit.readHistoricalData(_startDate, _endDate, [('com.google.step_count.delta')],
        function(data) {
          // Block#: yu1^WH}t=[Ec@:5UY`DJ
          _that.HealthDashboardLib_stepsreadings = data;
          // Block#: vq$|i3!SooNBifIz^Dkm
          HealthDashboardLib__displaySteps().then(response => {;
          });
        },
        function(error_data) {
          // Block#: Lo0?+-U^Lrn_!GBAKFR-
          $('[obj-name="connectButton"]').show(); // Block#: ZLkqehBG$O/x_NA9}9or
          com.fc.JavaScriptDistLib.GoogleFit.deAuthorize();
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__fetchMeasurements2() {
    return new Promise(function(resolve, reject) {
      // Block#: E0coM;rl7p-qt;n_mmxU
      com.fc.JavaScriptDistLib.SnapClinical.fetch('/snap-api/user/search/whoAmI', "GET", JSON.stringify(),
        function(data) {
          // Block#: V?%2Qb6^H0X$R|__OOOx
          _that.HealthDashboardLib_snapusername = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(data, 'username'));
          // Block#: OOvaEg#Wi}~H!Arr^N{K
          console.log(String('Snapclinical whoAmI response is ') + String(_that.HealthDashboardLib_snapusername));
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(String('Snapclinical whoAmI response is ') + String(_that.HealthDashboardLib_snapusername));
            _that.debugService.printLog();
          }
          // Block#: YH-(UDeNW/{H+G:Ol1uT
          com.fc.JavaScriptDistLib.SnapClinical.fetch((['/snap-api/measurements/search/findbyUsername?username=', _that.HealthDashboardLib_snapusername, '&size=500'].join('')), "GET", JSON.stringify(),
            function(data) {
              // Block#: )_[1`H{sSC)W$EYYPZ+0
              console.log('measurement success');
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push('measurement success');
                _that.debugService.printLog();
              }
              // Block#: wQ5Go^Gv[JL$c|!9cX+^
              console.log(data);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(data);
                _that.debugService.printLog();
              }
              // Block#: |Z%iAo@+MK[L#?$QVeaZ
              console.log(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
                _that.debugService.printLog();
              }
              // Block#: f*R/PERZNeycsv;#a_5+
              _that.HealthDashboardLib_snapclinicalmeasurements = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(data, '$._embedded.measurements[*]'));
              // Block#: qe1AWsFyx;)k8{2PnSTF
              if(!(_that.HealthDashboardLib_snapclinicalmeasurements == null)) {
                // Block#: .Ep,IL2K6{~eaN9Vvgc^
                if(!!_that.HealthDashboardLib_snapclinicalmeasurements.length) {
                  // Block#: #B*5,GpWL*sZv:I+]a`X
                  HealthDashboardLib__parseMeasurements().then(response => {;
                  });
                } else {
                  // Block#: 4|UmRK-GCz*DH(NY=6-N
                  com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
                }
              } else {
                // Block#: 0d3~uHkK-Y#~,~0{c+U$
                com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
              }
            },
            function(error) {
              // Block#: u1g%E0Dwcy(:|zvojIT5
              console.log(error);
              if(_that.debugService && _that.debugService.active) {
                _that.debugService.traces.push(error);
                _that.debugService.printLog();
              }
              // Block#: ;Dkp-qgOD5D{8G?aI=?B
              com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
            });
        },
        function(error) {
          // Block#: EMpEKj*LX4A0?!!9(E;q
          console.log(error);
          if(_that.debugService && _that.debugService.active) {
            _that.debugService.traces.push(error);
            _that.debugService.printLog();
          }
          // Block#: ,SRjlb3@SUe#,17S.lS5
          com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false);
        });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__parseMeasurements2() {
    return new Promise(function(resolve, reject) {
      // Block#: jef/qYXq?1h(2m$[zw=C
      _that.HealthDashboardLib_lenofmeasurements = _that.HealthDashboardLib_snapclinicalmeasurements.length;
      // Block#: ISxiG$1!Qw+q)$~RR~4D
      _that.HealthDashboardLib_weightreadings = [];
      // Block#: ZHO?wl^WW8app(#W3VC+
      _that.HealthDashboardLib_bpsystolicreadings = [];
      // Block#: a`J#Bm$WN9;J(JYLfBZ@
      _that.HealthDashboardLib_bpdiastolicreadings = [];
      // Block#: GxBw9qQEB/ykK,(VW]tk
      _that.HealthDashboardLib_weightreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: 1Amh?mt%rmc~;zdv35DB
      _that.HealthDashboardLib_bpsystolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: ]tT92_X{_ur+X8ts#}Js
      _that.HealthDashboardLib_bpdiatolicreadingsdict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: B,u%Vc3{-Y{bg4_sv(vv
      var index_end15 = _that.HealthDashboardLib_lenofmeasurements - 1;
      var index_inc15 = 1;
      if(0 > index_end15) {
        index_inc15 = -index_inc15;
      }
      for(index = 0; index_inc15 >= 0 ? index <= index_end15 : index >= index_end15; index += index_inc15) {
        // Block#: +piNo-ytF-lJFSW,ujr^
        if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr')) {
          // Block#: fMmSTWV/?dD)e3JGEv1O
          _that.HealthDashboardLib_entryDict = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['timestamp', 'value'], [HealthDashboardLib__getFormattedTime((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'timestamp'))), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'value'))]);
          // Block#: QBQWk+0L{lx;ksQbC(bH
          if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Body weight')) {
            // Block#: 5m(npwj^D|qa8QV*t3;w
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_weightreadingsdict).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Systolic blood pressure')) {
            // Block#: M9*W#4]s.]hE:5;h}l~b
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_bpsystolicreadingsdict).then(response => {;
            });
          } else if(com.fc.JavaScriptDistLib.TextLib.textContains(com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_snapclinicalmeasurements[index], 'unitDescr'), 'Diastolic blood pressure')) {
            // Block#: U}0k`GFiia=9_0LStf6#
            HealthDashboardLib__appendReadings(_that.HealthDashboardLib_bpdiatolicreadingsdict).then(response => {;
            });
          }
        }
      }
      // Block#: ::5TYy*YIilP;I_pITpL
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_weightreadingsdict, _that.HealthDashboardLib_weightreadings).then(response => {;
      });
      // Block#: ^tvr4BpksE)Txfx|N#wx
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_bpsystolicreadingsdict, _that.HealthDashboardLib_bpsystolicreadings).then(response => {;
      });
      // Block#: G2_A~{jo:zp-U/|t1Cq7
      HealthDashboardLib__sortReadings(_that.HealthDashboardLib_bpdiatolicreadingsdict, _that.HealthDashboardLib_bpdiastolicreadings).then(response => {;
      });
      // Block#: R#7xLr15},YcAzEV/@_3
      HealthDashboardLib__displayBP().then(response => {;
      });
      // Block#: 01`V8gs]$Q=Oq#^]3=4}
      HealthDashboardLib__displayWeight().then(response => {;
      });
      // Block#: [t,+;7o`#AF~CytO.q,i
      com.fc.JavaScriptDistLib.Screen.setProperty["Loader Visible"]("HealthDashboardScreen", false); // Block#: ~3U$-7/2#i^z[hY$WI#w
      com.fc.JavaScriptDistLib.PageView.refresh('StatsPageView')
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__getFormattedTime2(timestring) {
    // Block#: gjx{1aC]|cK;8tjF1{Q=
    _that.HealthDashboardLib_tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(timestring, 'T')[0];
    // Block#: vubghsuabCId$9(om$=O
    _that.HealthDashboardLib_tempList = com.fc.JavaScriptDistLib.TextLib.textSplitWith(_that.HealthDashboardLib_tempList, '-');
    return [_that.HealthDashboardLib_tempList[1], '/', _that.HealthDashboardLib_tempList.slice(-1)[0], '/', _that.HealthDashboardLib_tempList[0]].join('');
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__appendReadings2(datareadingsdict) {
    return new Promise(function(resolve, reject) {
      // Block#: 9)kB[Cc[2c_dSeVNA;?x
      if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'))) {
        // Block#: `olGJ!h92wKe/af-6u6%
        _that.HealthDashboardLib_tempDict = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp')));
        // Block#: zB]_33,k)p3,5foe?YZK
        _that.HealthDashboardLib_tempVal = ((com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'value')) + (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_tempDict, 'value'))) / 2;
        // Block#: a:mPR%[Zs*Q:mz83094p
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.HealthDashboardLib_tempDict, 'value', _that.HealthDashboardLib_tempVal);
        // Block#: U:Ss0Xi-+Mvkx_?M-pXh
        com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'), _that.HealthDashboardLib_tempDict);
      } else {
        // Block#: RV`E2ZO@9!=:LV.:QA}n
        _that.HealthDashboardLib_tempDict = _that.HealthDashboardLib_entryDict;
      }
      // Block#: ]((o4B[nK+v?=M*+=|*p
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(datareadingsdict, com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_entryDict, 'timestamp'), _that.HealthDashboardLib_tempDict);
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__sortReadings2(datareadingsdict, datareadingslist) {
    return new Promise(function(resolve, reject) {
      // Block#: Gr~[y6nWn2d3GQN2K*Ys
      _that.HealthDashboardLib_timestamplist = [];
      // Block#: !Y8cKvH~]D9n-{mH8|cI
      _that.HealthDashboardLib_timestamplistString = (com.fc.JavaScriptDistLib.Dictionary.getKeys(datareadingsdict));
      // Block#: MEjkIkZTu4i,)U1D(QPd
      _that.HealthDashboardLib_tempDict = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();
      // Block#: O?p*@,/(|jW[ClQ;SmeK
      if(!!_that.HealthDashboardLib_timestamplistString.length) {
        // Block#: ycefl*X-tR]U^R%$9.U[
        var index_end16 = _that.HealthDashboardLib_timestamplistString.length - 1;
        var index_inc16 = 1;
        if(0 > index_end16) {
          index_inc16 = -index_inc16;
        }
        for(index = 0; index_inc16 >= 0 ? index <= index_end16 : index >= index_end16; index += index_inc16) {
          // Block#: p0{+x_c3v8e=0=RM`3[U
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_timestamplist, (com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((_that.HealthDashboardLib_timestamplistString[index]))))))
          // Block#: tMChFK#@;P{q1cZI0qxT
          com.fc.JavaScriptDistLib.Dictionary.setDictValue(_that.HealthDashboardLib_tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.TimeLibrary.createTimestampFromTime((com.fc.JavaScriptDistLib.TimeLibrary.createTime((_that.HealthDashboardLib_timestamplistString[index]))))), _that.HealthDashboardLib_timestamplistString[index]);
        }
        // Block#: [?@+-q3efwsX4W_d`3.+
        com.fc.JavaScriptDistLib.ListLibrary.listOrder(_that.HealthDashboardLib_timestamplist, 'ASCENDING')
        // Block#: w}gM|@#Zusg`t2lc}X:C
        var index_end17 = _that.HealthDashboardLib_timestamplist.length - 1;
        var index_inc17 = 1;
        if(0 > index_end17) {
          index_inc17 = -index_inc17;
        }
        for(index = 0; index_inc17 >= 0 ? index <= index_end17 : index >= index_end17; index += index_inc17) {
          // Block#: U03%kKvAa-t2bKs%r!3f
          _that.HealthDashboardLib_tempString = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(_that.HealthDashboardLib_tempDict, com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_timestamplist[index])));
          // Block#: 849Fpbw!wyd;fc(IWOKO
          com.fc.JavaScriptDistLib.ListLibrary.listAdd(datareadingslist, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(datareadingsdict, _that.HealthDashboardLib_tempString)))
        }
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayBP2() {
    return new Promise(function(resolve, reject) {
      // Block#: RWwe,#[p]%KQ7FIT]h8q
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_bpsystolicreadings.length, "GT", 0)) {
        // Block#: Ja:[%OhxtrR50Hae(UGD
        _that.HealthDashboardLib_bpdaysclean = [];
        // Block#: nv5448K](gA%Ub$Jre?|
        _that.HealthDashboardLib_bysystoliclistclean = [];
        // Block#: U3?GbI843/KX1V],WhyM
        _that.HealthDashboardLib_bpdiastoliclistclean = [];
        // Block#: EMmxeEu6]LryziN|J3~K
        _that.HealthDashboardLib_bpsystolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpsystolicreadings, String('$.[*].') + String('timestamp')));
        // Block#: G6trpI[iDI-_A2$~XC#v
        _that.HealthDashboardLib_bpsystoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpsystolicreadings, String('$.[*].') + String('value')));
        // Block#: FKAQC_Wd4AiCSUH8VPz5
        _that.HealthDashboardLib_bpdiastolicdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpdiastolicreadings, String('$.[*].') + String('timestamp')));
        // Block#: `@*)JJ!Q1ksw6`=T_))2
        _that.HealthDashboardLib_bpdiastoliclist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_bpdiastolicreadings, String('$.[*].') + String('value')));
        // Block#: }9Og_A6lP]z(6RK9ScD]
        var index_end18 = _that.HealthDashboardLib_bpdiastolicdays.length - 1;
        var index_inc18 = 1;
        if(0 > index_end18) {
          index_inc18 = -index_inc18;
        }
        for(index = 0; index_inc18 >= 0 ? index <= index_end18 : index >= index_end18; index += index_inc18) {
          // Block#: K[(u}].=K@Zt3d~MO]_F
          _that.HealthDashboardLib_tempString = _that.HealthDashboardLib_bpdiastolicdays[index];
          // Block#: A/-_8n3]kq6j*fcVUw@3
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains(_that.HealthDashboardLib_bpsystolicdays, _that.HealthDashboardLib_tempString)) {
            // Block#: SPL=F1aA{c=DE_DR/(9V
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_tempString)
            // Block#: SUSo0@$$x`3FoE}8LP5x
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bpdiastoliclistclean, _that.HealthDashboardLib_bpdiastoliclist[index])
          }
        }
        // Block#: fCu50TOL5WUy^k%*Bc)V
        var index_end19 = _that.HealthDashboardLib_bpsystolicdays.length - 1;
        var index_inc19 = 1;
        if(0 > index_end19) {
          index_inc19 = -index_inc19;
        }
        for(index = 0; index_inc19 >= 0 ? index <= index_end19 : index >= index_end19; index += index_inc19) {
          // Block#: @5MM5..C!{c:q~3M}p~H
          _that.HealthDashboardLib_tempString = _that.HealthDashboardLib_bpsystolicdays[index];
          // Block#: n[972nX6e-QWEQ^YI73G
          if(com.fc.JavaScriptDistLib.ListLibrary.listContains(_that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_tempString)) {
            // Block#: sI6Up.D{`%7akB7HxaFG
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(_that.HealthDashboardLib_bysystoliclistclean, _that.HealthDashboardLib_bpsystoliclist[index])
          }
        }
        // Block#: ..gUQEFZQ}WA`7p|PCd5
        _that.HealthDashboardLib_bpsystolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', _that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_bysystoliclistclean, 'bpsystolic'));
        // Block#: Bua4P*Hf$y/8@;75Txi)
        _that.HealthDashboardLib_bpdiastolicplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('bpgraph', _that.HealthDashboardLib_bpdaysclean, _that.HealthDashboardLib_bpdiastoliclistclean, 'bpdiastolic'));
        // Block#: yL({-;ehrh9:w5JL?=bl
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdaysclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdaysclean));
          _that.debugService.printLog();
        }
        // Block#: |Jr%(D;EH#ln(A!%3;n,
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bysystoliclistclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bysystoliclistclean));
          _that.debugService.printLog();
        }
        // Block#: 9m~Mi9pN~|S.rb?o(;ex
        console.log(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdiastoliclistclean));
        if(_that.debugService && _that.debugService.active) {
          _that.debugService.traces.push(com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_bpdiastoliclistclean));
          _that.debugService.printLog();
        }
        // Block#: M!-J+dVDk?iLthv=!RPH
        _that.HealthDashboardLib_bpsystolicplot // Block#: 0]scGAnd(N58_X[D~DJv
        _that.HealthDashboardLib_bpdiastolicplot // Block#: /y5$Oldsp(7IP|9PG]/x
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('bpgraph', 500, 500); // Block#: 3abA28r.B:]iyw$l%g]l
        HealthDashboardLib__computeStatsForBP().then(response => {;
        });
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__computeStatsForBP2() {
    return new Promise(function(resolve, reject) {
      // Imported from Lib: StatisticsLibrary
      // Block#: CP:jSWwQW+#wt#yy0N-B
      HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: bkSxIl!bm*T:KgU1QK@_
          _that.HealthDashboardLib_avgsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: PjW`}1NyGJ~|2Sj4HK56
          HealthDashboardLib__StatisticsLibrary__average(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: JUW)AO)*{Sh13}19;Qbv
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("avgbpvalue", ([_that.HealthDashboardLib_avgsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: h{5lEY=w%a@U8z{77uBw
      HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: )3B3YiE^YYzBXU#I]9Hf
          _that.HealthDashboardLib_maxsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: 4fZV`A$lmS9$E5lH4fui
          HealthDashboardLib__StatisticsLibrary__max(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: pmbk)`H)`5!Fz~N$*-Cy
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("maxbpvalue", ([_that.HealthDashboardLib_maxsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
      // Imported from Lib: StatisticsLibrary
      // Block#: r8rZ~$|Q,|hFD#3w`wvE
      HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_bpsystoliclist).then(response => {;
        if(response.name === "value") {
          // Block#: _%3VRmD4jAe;k6?~ku3/
          _that.HealthDashboardLib_minsystolic = (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)));
          // Imported from Lib: StatisticsLibrary
          // Block#: sbv=|l$qA-_@n%C(FOp{
          HealthDashboardLib__StatisticsLibrary__min(_that.HealthDashboardLib_bpdiastoliclist).then(response => {;
            if(response.name === "value") {
              // Block#: Hsg5C/}SiR#wYg*cL|5B
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("minbpvalue", ([_that.HealthDashboardLib_minsystolic, '/', (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(response.data)))].join('')));
            }
          });
        }
      });
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__displayWeight2() {
    return new Promise(function(resolve, reject) {
      // Block#: qi9lhItc)ME+H:vas+(H
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightreadings.length, "GT", 0)) {
        // Block#: {;JtX$3[C!}HW)7zXGc1
        _that.HealthDashboardLib_weightdays = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_weightreadings, String('$.[*].') + String('timestamp')));
        // Block#: Ykzq0Ul8@r|T@_7MeX`/
        _that.HealthDashboardLib_weightlist = (com.fc.JavaScriptDistLib.JSON.parseJSONDataForPath(_that.HealthDashboardLib_weightreadings, String('$.[*].') + String('value')));
        // Block#: wBPAO6JMn{yg@U%EYf]3
        var index_end20 = _that.HealthDashboardLib_weightlist.length - 1;
        var index_inc20 = 1;
        if(0 > index_end20) {
          index_inc20 = -index_inc20;
        }
        for(index = 0; index_inc20 >= 0 ? index <= index_end20 : index >= index_end20; index += index_inc20) {
          // Block#: =@9]pk4NTxg_dO}D@U(Q
          _that.HealthDashboardLib_weightlist[index] = HealthDashboardLib__toPounds(_that.HealthDashboardLib_weightlist[index]);
        }
        // Block#: UO%@aK!eBcRTFD1:YzD8
        _that.HealthDashboardLib_weightplot = (com.fc.JavaScriptDistLib.GraphContainer.createChartWithList('weightgraph', _that.HealthDashboardLib_weightdays, _that.HealthDashboardLib_weightlist, 'weight'));
        // Block#: Ez^|{p1p8ZPO*;Pg1Yy$
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_prePregnancyWeight, "GT", 0)) {
          // Block#: D7U!HgYv1+Ny]XORwqN)
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Pre Pregnancy Weight'); // Block#: ;r4|@Q#+.LQUBMb]5@Tm
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_prePregnancyWeight)));
        } else {
          // Block#: 44m,gN}D*-|_hoHs.Oi*
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightLabel", 'Initial Weight'); // Block#: t[dtAR3k^eNMeyZe9nkU
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("InitialWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(_that.HealthDashboardLib_weightlist[0]))));
        }
        // Block#: )zd|-=aWzpAmlX42QH[d
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("CurrentWeightValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(Math.round(_that.HealthDashboardLib_weightlist.slice(-1)[0])))); // Block#: .Uim0SeS*+Ff8A75!ohq
        _that.HealthDashboardLib_weightChange = Math.round((com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("CurrentWeightValue"))) - (com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("InitialWeightValue"))));
        // Block#: cnCHshS/O0OHy2EZf~|J
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightChange, "GT", 0)) {
          // Block#: A)]Zo9z^quZ`b:kI`(-Q
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange))); // Block#: -i$87EQ!wqS-ISuf=^5H
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '+');
        } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(_that.HealthDashboardLib_weightChange, "LT", 0)) {
          // Block#: SLD,MEr8]zO=b7):NH,9
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange * -1))); // Block#: zeUod;Cfd2EEo5S[A5hX
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '-');
        } else {
          // Block#: SomC6ZnhO_PLFm+tg*-]
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeValue", (com.fc.JavaScriptDistLib.TextLib.convertToText(_that.HealthDashboardLib_weightChange))); // Block#: 3A:I$aPw`^gc0]vYu2tz
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("weightChangeSign", '');
        }
        // Block#: /1HD0V)D1p=d0D~n)E]2
        _that.HealthDashboardLib_weightplot // Block#: #NKJWi7d0)vk_OImm6tG
        com.fc.JavaScriptDistLib.GraphContainer.addChartTransition('weightgraph', 500, 500);
      }
    });
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__toPounds2(weightKg) {
    return weightKg * 2.20462;
  }
  /**
   * Describe this function...
   */
  function HealthDashboardLib__authorize2(dataTypesList) {
    return new Promise(function(resolve, reject) {
      // Block#: rwW4.[AJTSE]M,W84eEJ
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: XD^!+4oL(3F3g{a3Cj?n
        com.fc.JavaScriptDistLib.HealthKit.authorize(dataTypesList,
          function() {
            // Block#: NmJfu@Yon:vBmB}au_I8
            com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', true) // Block#: 3,trt{[;eB8haG9d*s/j
            resolve({
              name: "success",
              data: null
            });
          },
          function(error_data) {
            // Block#: ,eiUuLyvaaJv6YyO[c9o
            resolve({
              name: "Error",
              data: error_data
            });
          });
      } else {
        // Block#: CLYzsdPS^n{L9sdN~,-d
        com.fc.JavaScriptDistLib.GoogleFit.authorize(dataTypesList, '847927879972-v2joor7mfejbha82er8dg72jpoh7jnb8.apps.googleusercontent.com', 'ZmzKVKXSJ5Y2BLvCTEAgND7d', 'https://develop.snapp.click',
          function() {
            // Block#: JO50VA[cjg6a-P4Y-RPj
            com.fc.JavaScriptDistLib.Storage.add('isHealthKitAuthorized', false) // Block#: QYkt%`lGDv(0}r-vBB[}
            resolve({
              name: "success",
              data: null
            });
          },
          function(error_data) {
            // Block#: 0|/Y?1V!|(EenMlTdzeJ
            resolve({
              name: "Error",
              data: error_data
            });
          });
      }
    });
  }
  // Block#: R/C60WJCh4mX=^_ASID)
  function on_screen_showHealthDashboardScreen() {
    try {
      // Block#: RnjRUK[]7Gz;j1TZcpAp
      console.log('health dashboard display');
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push('health dashboard display');
        _that.debugService.printLog();
      }
      // Block#: 6pUpwV,MI{w@?N,xT~_T
      HealthDashboardLib__displayDashboard().then(response => {;
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="HealthDashboardScreen"]').on('show', on_screen_showHealthDashboardScreen);
  com.fc.JavaScriptDistLib.Screen.screenDict['showHealthDashboardScreen'] = on_screen_showHealthDashboardScreen;
  // Block#: fl^=9GUo3@.+Ag2Qj:JV
  function on_backbutton_click(e) {
    try {
      // Block#: y@$?`|WneTMVJ*UU,?IH
      $('[obj-name="connectButton"]').hide();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="backbutton"]').on('click', on_backbutton_click);
  // Block#: 65n_?8nw)!#jF$_jmfL]
  let on_screen_back_button_pressHealthDashboardScreen = function() {
    try {
      // Block#: wfzjb%l7FI?y{:l[-Nh@
      $('[obj-name="connectButton"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  com.fc.JavaScriptDistLib.Screen.screenDict['backHealthDashboardScreen'] = on_screen_back_button_pressHealthDashboardScreen;
  // Block#: S=JWkT1lq,]b:ozY_i42
  function on_connectButton_click(e) {
    try {
      // Block#: Bj;P{iJtG|;Jc.$in/=c
      if(com.fc.JavaScriptDistLib.HealthKit.isAvailable()) {
        // Block#: ~,pO7QrK^Q*EeM-lik#s
        HealthDashboardLib__authorize([('com.apple.step_count.delta')]).then(response => {;
          if(response.name === "success") {
            // Block#: }D1L)D.A*1fX,4=`Z251
            $('[obj-name="connectButton"]').hide(); // Block#: 7%t50fqOtF,:ALg+]E#^
            HealthDashboardLib__fetchStepsFromHealthKit().then(response => {;
            });
          }
          if(response.name === "Error") {
            // Block#: q${F`h0sRy)SF0bFrY6P
            $('[obj-name="connectButton"]').show();
          }
        });
      } else {
        // Block#: B@ZUb.5gFqj+!=j+ZSK_
        HealthDashboardLib__authorize([('com.google.step_count.delta')]).then(response => {;
          if(response.name === "success") {
            // Block#: Zc7;UccD?q2pJcMVfT6n
            $('[obj-name="connectButton"]').hide(); // Block#: G33RO]F9zmfw{$8Hb.l_
            HealthDashboardLib__fetchStepsFromGoogleFit().then(response => {;
            });
          }
          if(response.name === "Error") {
            // Block#: dkr)8}IlY~E?-pk{_lw*
            $('[obj-name="connectButton"]').show();
          }
        });
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="connectButton"]').on('click', on_connectButton_click);
  // Block#: F`Bu|koVW}-{hxGrmvj#
  com.fc.JavaScriptDistLib.PageView.onPageChange('StatsPageView', function(page_number) {
    // Block#: RK)076Z;H(bSBn]goVN.
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 0)) {
      // Block#: }U;]mjL5Orvevch|SPuD
      HealthDashboardLib__displayBP().then(response => {;
      });
    } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 1)) {
      // Block#: EtjSM|7vzZa}ly)b+DW;
      HealthDashboardLib__displayWeight().then(response => {;
      });
    } else if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(page_number, "EQ", 2)) {
      // Block#: F]%N@A`aJuc~Yw)mg$9,
      HealthDashboardLib__displaySteps().then(response => {;
      });
    }
  });
  var onGoogleFitAuthLost;
  com.fc.JavaScriptDistLib.GoogleFit.configureAuth(onGoogleFitAuthLost);
  $('[obj-name="ciao"]').show();
});
// Generated by snapp
// 269992-548285-421190-472247
