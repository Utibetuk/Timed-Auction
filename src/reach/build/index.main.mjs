// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc5],
      3: [ctc0, ctc1, ctc6, ctc2, ctc5, ctc2],
      6: [ctc0, ctc1, ctc6, ctc2, ctc2, ctc0, ctc5, ctc2],
      7: [ctc0, ctc1, ctc2, ctc6, ctc2, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function BidderView(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for BidderView expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for BidderView expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v371 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v372 = [v371];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc3, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v386, v387, v388], secs: v390, time: v389, didSend: v35, from: v385 } = txn1;
  const v391 = v372[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0')];
  const v393 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '1')];
  const v394 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '2')];
  const v395 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v393, v394];
  const v396 = stdlib.Array_set(v372, stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0'), v395);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v400, time: v399, didSend: v42, from: v398 } = txn2;
  ;
  const v401 = v396[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
  const v402 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
  const v403 = stdlib.add(v402, stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '1'));
  const v406 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '1')];
  const v407 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '2')];
  const v408 = [v403, v406, v407];
  const v409 = stdlib.Array_set(v396, stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0'), v408);
  ;
  const v410 = stdlib.addressEq(v385, v398);
  stdlib.assert(v410, {
    at: './index.rsh:45:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'BidderView'
    });
  stdlib.protect(ctc0, await interact.optIn(v386), {
    at: './index.rsh:47:30:application',
    fs: ['at ./index.rsh:47:30:application call to [unknown function] (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:47:30:application call to "liftedInteract" (defined at: ./index.rsh:47:30:application)'],
    msg: 'optIn',
    who: 'BidderView'
    });
  
  stdlib.protect(ctc0, await interact.seeBid(v385, v387), {
    at: './index.rsh:48:31:application',
    fs: ['at ./index.rsh:48:31:application call to [unknown function] (defined at: ./index.rsh:48:31:function exp)', 'at ./index.rsh:48:31:application call to "liftedInteract" (defined at: ./index.rsh:48:31:application)'],
    msg: 'seeBid',
    who: 'BidderView'
    });
  
  const v418 = stdlib.add(v389, v388);
  const v419 = stdlib.mul(v387, stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, '1000000'));
  const v420 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v421 = v420;
  let v422 = stdlib.checkedBigNumberify('./index.rsh:57:25:decimal', stdlib.UInt_max, '0');
  let v424 = v419;
  let v425 = v399;
  let v426 = v389;
  let v431 = v409;
  let v432 = stdlib.checkedBigNumberify('./index.rsh:35:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v439 = stdlib.le(v426, v418);
    const v440 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
    const v441 = v439 ? v440 : false;
    
    return v441;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc4],
      timeoutAt: ['time', v418],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v495, time: v494, didSend: v238, from: v493 } = txn4;
      ;
      const v496 = stdlib.addressEq(v385, v493);
      stdlib.assert(v496, {
        at: './index.rsh:72:19:dot',
        fs: ['at ./index.rsh:71:40:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)'],
        msg: 'sender correct',
        who: 'BidderView'
        });
      const cv421 = v421;
      const cv422 = v422;
      const cv424 = v424;
      const cv425 = v494;
      const cv426 = v425;
      const cv431 = v431;
      const cv432 = v432;
      
      v421 = cv421;
      v422 = cv422;
      v424 = cv424;
      v425 = cv425;
      v426 = cv426;
      v431 = cv431;
      v432 = cv432;
      
      continue;
      }
    else {
      const {data: [v463], secs: v465, time: v464, didSend: v181, from: v462 } = txn3;
      undefined /* setApiDetails */;
      const v467 = v463[stdlib.checkedBigNumberify('./index.rsh:60:14:spread', stdlib.UInt_max, '0')];
      const v468 = stdlib.mul(v467, stdlib.checkedBigNumberify('./index.rsh:62:25:decimal', stdlib.UInt_max, '1000000'));
      const v469 = stdlib.gt(v468, v424);
      stdlib.assert(v469, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:62:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)'],
        msg: 'bid is too low',
        who: 'BidderView'
        });
      const v473 = stdlib.add(v432, v468);
      ;
      await stdlib.mapSet(map0, v462, v467);
      const v479 = true;
      await txn3.getOutput('Bidder_bid', 'v479', ctc5, v479);
      stdlib.protect(ctc0, await interact.seeBid(v462, v467), {
        at: './index.rsh:67:43:application',
        fs: ['at ./index.rsh:67:43:application call to [unknown function] (defined at: ./index.rsh:67:43:function exp)', 'at ./index.rsh:67:43:application call to "liftedInteract" (defined at: ./index.rsh:67:43:application)', 'at ./index.rsh:63:46:application call to [unknown function] (defined at: ./index.rsh:63:46:function exp)'],
        msg: 'seeBid',
        who: 'BidderView'
        });
      
      const v488 = stdlib.add(v422, stdlib.checkedBigNumberify('./index.rsh:68:33:decimal', stdlib.UInt_max, '1'));
      const v491 = stdlib.Array_set(v421, v422, v467);
      const cv421 = v491;
      const cv422 = v488;
      const cv424 = v468;
      const cv425 = v464;
      const cv426 = v425;
      const cv431 = v431;
      const cv432 = v473;
      
      v421 = cv421;
      v422 = cv422;
      v424 = cv424;
      v425 = cv425;
      v426 = cv426;
      v431 = cv431;
      v432 = cv432;
      
      continue;}
    
    }
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v501, time: v500, didSend: v244, from: v499 } = txn3;
  ;
  const v502 = stdlib.addressEq(v385, v499);
  stdlib.assert(v502, {
    at: './index.rsh:76:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'BidderView'
    });
  let v503 = stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '0');
  let v504 = v385;
  let v505 = v500;
  let v511 = v431;
  let v512 = v432;
  
  while (await (async () => {
    const v518 = stdlib.lt(v503, v422);
    
    return v518;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v523], secs: v525, time: v524, didSend: v262, from: v522 } = txn4;
    ;
    const v526 = stdlib.addressEq(v385, v522);
    stdlib.assert(v526, {
      at: './index.rsh:85:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'BidderView'
      });
    const v527 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v523), null);
    let v528;
    switch (v527[0]) {
      case 'None': {
        const v529 = v527[1];
        v528 = stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v530 = v527[1];
        v528 = v530;
        
        break;
        }
      }
    const v531 = await stdlib.Array_asyncReduce([v421], stdlib.checkedBigNumberify('reach standard library:128:62:decimal', stdlib.UInt_max, '0'), async([v533], v532, v534) => {
      const v535 = stdlib.gt(v533, v532);
      const v536 = v535 ? v533 : v532;
      
      return v536;})
    const v537 = stdlib.eq(v528, v531);
    if (v537) {
      const v538 = v511[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
      const v539 = v538[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
      const v545 = stdlib.sub(v539, v539);
      const v548 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '1')];
      const v549 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '2')];
      const v550 = [v545, v548, v549];
      const v551 = stdlib.Array_set(v511, stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '0'), v550);
      ;
      const v552 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:91:43:decimal', stdlib.UInt_max, '1'));
      const cv503 = v552;
      const cv504 = v523;
      const cv505 = v524;
      const cv511 = v551;
      const cv512 = v512;
      
      v503 = cv503;
      v504 = cv504;
      v505 = cv505;
      v511 = cv511;
      v512 = cv512;
      
      continue;}
    else {
      const v553 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:95:43:decimal', stdlib.UInt_max, '1'));
      const cv503 = v553;
      const cv504 = v504;
      const cv505 = v524;
      const cv511 = v511;
      const cv512 = v512;
      
      v503 = cv503;
      v504 = cv504;
      v505 = cv505;
      v511 = cv511;
      v512 = cv512;
      
      continue;}
    
    }
  ;
  const v559 = v511[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
  const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v504, v424), {
    at: './index.rsh:102:40:application',
    fs: ['at ./index.rsh:102:40:application call to [unknown function] (defined at: ./index.rsh:102:40:function exp)', 'at ./index.rsh:102:40:application call to "liftedInteract" (defined at: ./index.rsh:102:40:application)'],
    msg: 'showOutcome',
    who: 'BidderView'
    });
  
  return;
  
  
  
  
  
  
  };
export async function _Bidder_bid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v385, v386, v418, v421, v422, v424, v425, v431, v432] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v448 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v449 = v448[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v451 = stdlib.mul(v449, stdlib.checkedBigNumberify('./index.rsh:62:25:decimal', stdlib.UInt_max, '1000000'));
  const v452 = stdlib.gt(v451, v424);
  stdlib.assert(v452, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v385, v386, v418, v421, v422, v424, v425, v431, v432, v448],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v451, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v463], secs: v465, time: v464, didSend: v181, from: v462 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v467 = v463[stdlib.checkedBigNumberify('./index.rsh:60:14:spread', stdlib.UInt_max, '0')];
      const v468 = stdlib.mul(v467, stdlib.checkedBigNumberify('./index.rsh:62:25:decimal', stdlib.UInt_max, '1000000'));
      const v473 = stdlib.add(v432, v468);
      sim_r.txns.push({
        amt: v468,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      await stdlib.simMapSet(sim_r, 0, v462, v467);
      const v479 = true;
      const v480 = await txn1.getOutput('Bidder_bid', 'v479', ctc6, v479);
      
      const v488 = stdlib.add(v422, stdlib.checkedBigNumberify('./index.rsh:68:33:decimal', stdlib.UInt_max, '1'));
      const v491 = stdlib.Array_set(v421, v422, v467);
      const v797 = v491;
      const v798 = v488;
      const v799 = v468;
      const v800 = v464;
      const v802 = v431;
      const v803 = v473;
      const v804 = stdlib.le(v425, v418);
      const v805 = stdlib.lt(v488, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
      const v806 = v804 ? v805 : false;
      if (v806) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc1, ctc5, ctc1, ctc1, ctc1, ctc8, ctc1, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v463], secs: v465, time: v464, didSend: v181, from: v462 } = txn1;
  undefined /* setApiDetails */;
  const v467 = v463[stdlib.checkedBigNumberify('./index.rsh:60:14:spread', stdlib.UInt_max, '0')];
  const v468 = stdlib.mul(v467, stdlib.checkedBigNumberify('./index.rsh:62:25:decimal', stdlib.UInt_max, '1000000'));
  const v469 = stdlib.gt(v468, v424);
  stdlib.assert(v469, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:62:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v473 = stdlib.add(v432, v468);
  ;
  await stdlib.mapSet(map0, v462, v467);
  const v479 = true;
  const v480 = await txn1.getOutput('Bidder_bid', 'v479', ctc6, v479);
  if (v181) {
    stdlib.protect(ctc0, await interact.out(v463, v480), {
      at: './index.rsh:60:15:application',
      fs: ['at ./index.rsh:60:15:application call to [unknown function] (defined at: ./index.rsh:60:15:function exp)', 'at ./index.rsh:65:23:application call to "notify" (defined at: ./index.rsh:63:46:function exp)', 'at ./index.rsh:63:46:application call to [unknown function] (defined at: ./index.rsh:63:46:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  const v488 = stdlib.add(v422, stdlib.checkedBigNumberify('./index.rsh:68:33:decimal', stdlib.UInt_max, '1'));
  const v491 = stdlib.Array_set(v421, v422, v467);
  const v797 = v491;
  const v798 = v488;
  const v799 = v468;
  const v800 = v464;
  const v802 = v431;
  const v803 = v473;
  const v804 = stdlib.le(v425, v418);
  const v805 = stdlib.lt(v488, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
  const v806 = v804 ? v805 : false;
  if (v806) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Object({
    deadline: ctc1,
    minBid: ctc1,
    nftId: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v371 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v372 = [v371];
  const v378 = stdlib.protect(ctc4, await interact.getSale(), {
    at: './index.rsh:38:70:application',
    fs: ['at ./index.rsh:37:17:application call to [unknown function] (defined at: ./index.rsh:37:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v379 = v378.deadline;
  const v380 = v378.minBid;
  const v381 = v378.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v381, v380, v379],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v386, v387, v388], secs: v390, time: v389, didSend: v35, from: v385 } = txn1;
      
      const v391 = v372[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0')];
      const v393 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '1')];
      const v394 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '2')];
      const v395 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v393, v394];
      const v396 = stdlib.Array_set(v372, stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0'), v395);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v386
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v386, v387, v388], secs: v390, time: v389, didSend: v35, from: v385 } = txn1;
  const v391 = v372[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0')];
  const v393 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '1')];
  const v394 = v391[stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '2')];
  const v395 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v393, v394];
  const v396 = stdlib.Array_set(v372, stdlib.checkedBigNumberify('./index.rsh:40:13:dot', stdlib.UInt_max, '0'), v395);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v385, v386, v387, v388, v389, v396],
    evt_cnt: 0,
    funcNum: 1,
    lct: v389,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '1'), v386]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v400, time: v399, didSend: v42, from: v398 } = txn2;
      
      ;
      const v401 = v396[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
      const v402 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
      const v403 = stdlib.add(v402, stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '1'));
      const v406 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '1')];
      const v407 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '2')];
      const v408 = [v403, v406, v407];
      const v409 = stdlib.Array_set(v396, stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0'), v408);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v386
        });
      
      const v418 = stdlib.add(v389, v388);
      const v419 = stdlib.mul(v387, stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, '1000000'));
      const v420 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v421 = v420;
      const v422 = stdlib.checkedBigNumberify('./index.rsh:57:25:decimal', stdlib.UInt_max, '0');
      const v424 = v419;
      const v425 = v399;
      const v426 = v389;
      const v431 = v409;
      const v432 = stdlib.checkedBigNumberify('./index.rsh:35:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v439 = stdlib.le(v426, v418);
        const v440 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
        const v441 = v439 ? v440 : false;
        
        return v441;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc1, ctc1, ctc1, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v400, time: v399, didSend: v42, from: v398 } = txn2;
  ;
  const v401 = v396[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
  const v402 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0')];
  const v403 = stdlib.add(v402, stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '1'));
  const v406 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '1')];
  const v407 = v401[stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '2')];
  const v408 = [v403, v406, v407];
  const v409 = stdlib.Array_set(v396, stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0'), v408);
  ;
  const v410 = stdlib.addressEq(v385, v398);
  stdlib.assert(v410, {
    at: './index.rsh:45:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc0, await interact.auctionReady(), {
    at: './index.rsh:46:34:application',
    fs: ['at ./index.rsh:46:34:application call to [unknown function] (defined at: ./index.rsh:46:34:function exp)', 'at ./index.rsh:46:34:application call to "liftedInteract" (defined at: ./index.rsh:46:34:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v418 = stdlib.add(v389, v388);
  const v419 = stdlib.mul(v387, stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, '1000000'));
  const v420 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  let v421 = v420;
  let v422 = stdlib.checkedBigNumberify('./index.rsh:57:25:decimal', stdlib.UInt_max, '0');
  let v424 = v419;
  let v425 = v399;
  let v426 = v389;
  let v431 = v409;
  let v432 = stdlib.checkedBigNumberify('./index.rsh:35:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v439 = stdlib.le(v426, v418);
    const v440 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
    const v441 = v439 ? v440 : false;
    
    return v441;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc5],
      timeoutAt: ['time', v418],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v385, v386, v418, v421, v422, v424, v425, v431, v432],
        evt_cnt: 0,
        funcNum: 7,
        lct: v425,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:72:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v495, time: v494, didSend: v238, from: v493 } = txn4;
          
          ;
          const cv421 = v421;
          const cv422 = v422;
          const cv424 = v424;
          const cv425 = v494;
          const cv426 = v425;
          const cv431 = v431;
          const cv432 = v432;
          
          await (async () => {
            const v421 = cv421;
            const v422 = cv422;
            const v424 = cv424;
            const v425 = cv425;
            const v426 = cv426;
            const v431 = cv431;
            const v432 = cv432;
            
            if (await (async () => {
              const v439 = stdlib.le(v426, v418);
              const v440 = stdlib.lt(v422, stdlib.checkedBigNumberify('./index.rsh:59:56:decimal', stdlib.UInt_max, '5'));
              const v441 = v439 ? v440 : false;
              
              return v441;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc3, ctc1, ctc8, ctc1, ctc1, ctc1, ctc10, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v495, time: v494, didSend: v238, from: v493 } = txn4;
      ;
      const v496 = stdlib.addressEq(v385, v493);
      stdlib.assert(v496, {
        at: './index.rsh:72:19:dot',
        fs: ['at ./index.rsh:71:40:application call to [unknown function] (defined at: ./index.rsh:71:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv421 = v421;
      const cv422 = v422;
      const cv424 = v424;
      const cv425 = v494;
      const cv426 = v425;
      const cv431 = v431;
      const cv432 = v432;
      
      v421 = cv421;
      v422 = cv422;
      v424 = cv424;
      v425 = cv425;
      v426 = cv426;
      v431 = cv431;
      v432 = cv432;
      
      continue;
      }
    else {
      const {data: [v463], secs: v465, time: v464, didSend: v181, from: v462 } = txn3;
      undefined /* setApiDetails */;
      const v467 = v463[stdlib.checkedBigNumberify('./index.rsh:60:14:spread', stdlib.UInt_max, '0')];
      const v468 = stdlib.mul(v467, stdlib.checkedBigNumberify('./index.rsh:62:25:decimal', stdlib.UInt_max, '1000000'));
      const v469 = stdlib.gt(v468, v424);
      stdlib.assert(v469, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:62:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)', 'at ./index.rsh:60:33:application call to [unknown function] (defined at: ./index.rsh:60:33:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      const v473 = stdlib.add(v432, v468);
      ;
      await stdlib.mapSet(map0, v462, v467);
      const v479 = true;
      await txn3.getOutput('Bidder_bid', 'v479', ctc6, v479);
      stdlib.protect(ctc0, await interact.seeBid(v462, v467), {
        at: './index.rsh:66:40:application',
        fs: ['at ./index.rsh:66:40:application call to [unknown function] (defined at: ./index.rsh:66:40:function exp)', 'at ./index.rsh:66:40:application call to "liftedInteract" (defined at: ./index.rsh:66:40:application)', 'at ./index.rsh:63:46:application call to [unknown function] (defined at: ./index.rsh:63:46:function exp)'],
        msg: 'seeBid',
        who: 'Creator'
        });
      
      const v488 = stdlib.add(v422, stdlib.checkedBigNumberify('./index.rsh:68:33:decimal', stdlib.UInt_max, '1'));
      const v491 = stdlib.Array_set(v421, v422, v467);
      const cv421 = v491;
      const cv422 = v488;
      const cv424 = v468;
      const cv425 = v464;
      const cv426 = v425;
      const cv431 = v431;
      const cv432 = v473;
      
      v421 = cv421;
      v422 = cv422;
      v424 = cv424;
      v425 = cv425;
      v426 = cv426;
      v431 = cv431;
      v432 = cv432;
      
      continue;}
    
    }
  const txn3 = await (ctc.sendrecv({
    args: [v385, v386, v421, v422, v431, v432],
    evt_cnt: 0,
    funcNum: 3,
    lct: v425,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v501, time: v500, didSend: v244, from: v499 } = txn3;
      
      ;
      const v503 = stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '0');
      const v504 = v385;
      const v505 = v500;
      const v511 = v431;
      const v512 = v432;
      
      if (await (async () => {
        const v518 = stdlib.lt(v503, v422);
        
        return v518;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v385,
          tok: undefined /* Nothing */
          });
        const v559 = v511[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
        const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v385,
          tok: v386
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v386
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc3, ctc8, ctc1, ctc10, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v501, time: v500, didSend: v244, from: v499 } = txn3;
  ;
  const v502 = stdlib.addressEq(v385, v499);
  stdlib.assert(v502, {
    at: './index.rsh:76:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v503 = stdlib.checkedBigNumberify('./index.rsh:78:30:decimal', stdlib.UInt_max, '0');
  let v504 = v385;
  let v505 = v500;
  let v511 = v431;
  let v512 = v432;
  
  while (await (async () => {
    const v518 = stdlib.lt(v503, v422);
    
    return v518;})()) {
    const v521 = stdlib.protect(ctc7, await interact.getAddress(v503), {
      at: './index.rsh:83:59:application',
      fs: ['at ./index.rsh:82:21:application call to [unknown function] (defined at: ./index.rsh:82:25:function exp)'],
      msg: 'getAddress',
      who: 'Creator'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v385, v386, v421, v422, v503, v504, v511, v512, v521],
      evt_cnt: 1,
      funcNum: 5,
      lct: v505,
      onlyIf: true,
      out_tys: [ctc7],
      pay: [stdlib.checkedBigNumberify('./index.rsh:85:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v523], secs: v525, time: v524, didSend: v262, from: v522 } = txn4;
        
        ;
        const v527 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v523), null);
        let v528;
        switch (v527[0]) {
          case 'None': {
            const v529 = v527[1];
            v528 = stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v530 = v527[1];
            v528 = v530;
            
            break;
            }
          }
        const v531 = await stdlib.Array_asyncReduce([v421], stdlib.checkedBigNumberify('reach standard library:128:62:decimal', stdlib.UInt_max, '0'), async([v533], v532, v534) => {
          const v535 = stdlib.gt(v533, v532);
          const v536 = v535 ? v533 : v532;
          
          return v536;})
        const v537 = stdlib.eq(v528, v531);
        if (v537) {
          const v538 = v511[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
          const v539 = v538[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
          const v545 = stdlib.sub(v539, v539);
          const v548 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '1')];
          const v549 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '2')];
          const v550 = [v545, v548, v549];
          const v551 = stdlib.Array_set(v511, stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '0'), v550);
          sim_r.txns.push({
            kind: 'from',
            to: v523,
            tok: v386
            });
          const v552 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:91:43:decimal', stdlib.UInt_max, '1'));
          const cv503 = v552;
          const cv504 = v523;
          const cv505 = v524;
          const cv511 = v551;
          const cv512 = v512;
          
          await (async () => {
            const v503 = cv503;
            const v504 = cv504;
            const v505 = cv505;
            const v511 = cv511;
            const v512 = cv512;
            
            if (await (async () => {
              const v518 = stdlib.lt(v503, v422);
              
              return v518;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v385,
                tok: undefined /* Nothing */
                });
              const v559 = v511[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
              const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v385,
                tok: v386
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v386
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        else {
          const v553 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:95:43:decimal', stdlib.UInt_max, '1'));
          const cv503 = v553;
          const cv504 = v504;
          const cv505 = v524;
          const cv511 = v511;
          const cv512 = v512;
          
          await (async () => {
            const v503 = cv503;
            const v504 = cv504;
            const v505 = cv505;
            const v511 = cv511;
            const v512 = cv512;
            
            if (await (async () => {
              const v518 = stdlib.lt(v503, v422);
              
              return v518;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v385,
                tok: undefined /* Nothing */
                });
              const v559 = v511[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
              const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v385,
                tok: v386
                });
              
              sim_r.txns.push({
                kind: 'halt',
                tok: v386
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc7, ctc3, ctc8, ctc1, ctc1, ctc7, ctc10, ctc1, ctc7],
      waitIfNotPresent: false
      }));
    const {data: [v523], secs: v525, time: v524, didSend: v262, from: v522 } = txn4;
    ;
    const v526 = stdlib.addressEq(v385, v522);
    stdlib.assert(v526, {
      at: './index.rsh:85:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v527 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v523), null);
    let v528;
    switch (v527[0]) {
      case 'None': {
        const v529 = v527[1];
        v528 = stdlib.checkedBigNumberify('./index.rsh:6:17:decimal', stdlib.UInt_max, '0');
        
        break;
        }
      case 'Some': {
        const v530 = v527[1];
        v528 = v530;
        
        break;
        }
      }
    const v531 = await stdlib.Array_asyncReduce([v421], stdlib.checkedBigNumberify('reach standard library:128:62:decimal', stdlib.UInt_max, '0'), async([v533], v532, v534) => {
      const v535 = stdlib.gt(v533, v532);
      const v536 = v535 ? v533 : v532;
      
      return v536;})
    const v537 = stdlib.eq(v528, v531);
    if (v537) {
      const v538 = v511[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
      const v539 = v538[stdlib.checkedBigNumberify('./index.rsh:90:29:application', stdlib.UInt_max, '0')];
      const v545 = stdlib.sub(v539, v539);
      const v548 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '1')];
      const v549 = v538[stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '2')];
      const v550 = [v545, v548, v549];
      const v551 = stdlib.Array_set(v511, stdlib.checkedBigNumberify('./index.rsh:90:47:application', stdlib.UInt_max, '0'), v550);
      ;
      const v552 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:91:43:decimal', stdlib.UInt_max, '1'));
      const cv503 = v552;
      const cv504 = v523;
      const cv505 = v524;
      const cv511 = v551;
      const cv512 = v512;
      
      v503 = cv503;
      v504 = cv504;
      v505 = cv505;
      v511 = cv511;
      v512 = cv512;
      
      continue;}
    else {
      const v553 = stdlib.add(v503, stdlib.checkedBigNumberify('./index.rsh:95:43:decimal', stdlib.UInt_max, '1'));
      const cv503 = v553;
      const cv504 = v504;
      const cv505 = v524;
      const cv511 = v511;
      const cv512 = v512;
      
      v503 = cv503;
      v504 = cv504;
      v505 = cv505;
      v511 = cv511;
      v512 = cv512;
      
      continue;}
    
    }
  ;
  const v559 = v511[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
  const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:100:25:application', stdlib.UInt_max, '0')];
  ;
  stdlib.protect(ctc0, await interact.showOutcome(v504, v424), {
    at: './index.rsh:101:37:application',
    fs: ['at ./index.rsh:101:37:application call to [unknown function] (defined at: ./index.rsh:101:37:function exp)', 'at ./index.rsh:101:37:application call to "liftedInteract" (defined at: ./index.rsh:101:37:application)'],
    msg: 'showOutcome',
    who: 'Creator'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_bid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)byte`],
    pure: [],
    sigs: [`Bidder_bid(uint64)byte`]
    },
  appApproval: `BiASAAEIByggBAMFBlgJYGiBAcCEPVCgjQYmAwEAAQEAIjUAMRhBBUYqZEkiWzUBJFs1AjEZIxJBAAoxACghC69mQgUTNhoAF0lBABQiNQQjNQaB3uyw1gISRDYaAUIAhzYaAhc1BDYaAzYaARdJIQgMQAInSSEJDEABGEklDEAAZSUSRCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/yEEWzX+gATiG7OpsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAoNAMhCls0AyEMWzIGNAMhDVs0A1dwETQDIQ5bQgMiSCU0ARJENARJIhJMNAISEUQoZClkUEk1A0khBFs1/yEKWzX+STUFNf2ABHR4qCQ0/VCwMgY0/wxENP0XSTX8IQ8LSTX7NAMhDFsNRDT7iARkMQAoKTT8FlBmgAkAAAAAAAAB3wGwKTUHNANXACA0AyEFWzT/NANXMChJIiQ0/gtSNPwWUEwkSTT+CwghBFJQNP4jCDT7MgY0AyENWzQDV3ARNAMhDls0+whCAnVIIQk0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEFWzX+VygoNf0hEFs1/CEKWzX7V4ARNfqBkQFbNflJNQU1+IAEkVjICjT4ULA0/zEAEkQ0+IgDnUk19iJVQAAGIjX3QgAMNPYjW0k19TX3QgAAIjX2IjX1NP0kNPULJFgXNfQ09jT0STT2DU019jT1IwhJNfUhCAxA/9009zT2EkEARzT6VwARSTX1Ils19LEisgE09LISIQayEDT4shQ0/rIRszT/NP40/TT8NPsjCDT4MgY09EkJFjT1VwgIUDT1VxABUDT5QgIJNP80/jT9NPw0+yMINANXYCAyBjT6NPlCAe9JIwxAANFJIQcMQABPIQcSRCEHNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEp2XEtLA0/zEAEkQ0/zQDIQVbNANXKCg0AyEQWyI0/zIGNANXWBE0A4FpW0IBkyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/oE4WzX9V0ARNfyABJqLkXSwNPxXABE1+yM0/ogCejT/MQASRDT/NP40/TQDgTBbCCEEryI0AyEEWyEPCzIGNP00+yJbIwgWNPtXCAhQNPtXEAFQIkIAlkghEYgCIyI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwgRGvSTX8VwARNfskrzT7VwgIUDT7VxABUDX6IRGIAc6xIrIBIrISIQayEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUDT6UChLAVcAUWdIIzUBMgY1AkIBMjX/Nf41/TX8Nfs1+jX5Nfg19zX2NP00+A40+iEIDBBBADk09jT3FlA0+BZQNPlQNPoWUDT7FlA0/BZQNP5QNP8WUChLAVcAf2cpSwFXfwpnSCU1ATIGNQJCANc09jT3FlA0+VA0+hZQNP5QNP8WUChLAVcAcWdIIQc1ATIGNQJCALA1/zX+Nf01/DX7Nfo1+TX4Nfc0+zT6DEEANTT3NPgWUDT5UDT6FlA0+xZQNPxQNP5QNP8WUChLAVcAf2cpSwFXfxpnSCEJNQEyBjUCQgBhsSKyATT/sggjshA097IHs7EisgE0/lcAESJbshIhBrIQNPeyFDT4shGzsSKyASKyEiEGshAyCbIVMgqyFDT4shGzQgAAMRkhCBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEHMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCELr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEGEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 153,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v386",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v386",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v387",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v523",
                "type": "address"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T20",
                "name": "v463",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v479",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v523",
                "type": "address"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T20",
                "name": "v463",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200296e3803806200296e833981016040819052620000269162000429565b6000805543600355620000386200024e565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f89290620001a1565b60608201526200010b3415600762000224565b62000115620002b5565b33815260208084018051516001600160a01b0316828401528051820151604080850191909152905181015160608085019190915243608085018190529085015160a08501526001600081905555516200017191839101620004eb565b6040516020818303038152906040526002908051906020019062000197929190620002ff565b50505050620005dd565b620001ab6200038e565b60005b60018110156200020157848160018110620001cd57620001cd620004d5565b6020020151828260018110620001e757620001e7620004d5565b602002015280620001f88162000576565b915050620001ae565b5081818460018110620002185762000218620004d5565b60200201529392505050565b816200024a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002816200038e565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b06200038e565b905290565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001620002b06200038e565b8280546200030d90620005a0565b90600052602060002090601f0160209004810192826200033157600085556200037c565b82601f106200034c57805160ff19168380011785556200037c565b828001600101855582156200037c579182015b828111156200037c5782518255916020019190600101906200035f565b506200038a929150620003db565b5090565b60405180602001604052806001905b620003c4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039d5790505090565b5b808211156200038a5760008155600101620003dc565b604051606081016001600160401b03811182821017156200042357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200043d57600080fd5b604080519081016001600160401b03811182821017156200046e57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200048857600080fd5b62000492620003f2565b60208501519092506001600160a01b0381168114620004b057600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101516101008601949291860160005b60018110156200056a578251805183528581015186840152860151151586830152918401919083019060010162000538565b50505050505092915050565b60006000198214156200059957634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005b557607f821691505b60208210811415620005d757634e487b7160e01b600052602260045260246000fd5b50919050565b61238180620005ed6000396000f3fe60806040526004361061008f5760003560e01c8063ab53f2c611610056578063ab53f2c614610124578063ac3ab70314610147578063b62792241461015a578063bf2c5b241461017d578063e268f1e61461019057005b80631e93b0f1146100985780632c10a159146100bc5780633bc5b7bf146100cf57806373b4522c146100fc578063832307571461010f57005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611a0f565b6101a3565b3480156100db57600080fd5b506100ef6100ea366004611a40565b6101ce565b6040516100b39190611a73565b61009661010a366004611a0f565b6101fa565b34801561011b57600080fd5b506001546100a9565b34801561013057600080fd5b50610139610221565b6040516100b3929190611ae4565b610096610155366004611a0f565b6102be565b61016d610168366004611b1e565b6102e5565b60405190151581526020016100b3565b61009661018b366004611a0f565b610318565b61009661019e366004611a0f565b61033f565b6040805160208101909152600081526101ca6101c436849003840184611c35565b82610366565b5050565b60408051606081018252600080825260208201819052918101919091526101f4826105de565b92915050565b6040805160208101909152600081526101ca61021b36849003840184611c35565b826106b1565b60006060600054600280805461023690611c6d565b80601f016020809104026020016040519081016040528092919081815260200182805461026290611c6d565b80156102af5780601f10610284576101008083540402835291602001916102af565b820191906000526020600020905b81548152906001019060200180831161029257829003601f168201915b50505050509050915091509091565b6040805160208101909152600081526101ca6102df36849003840184611ca2565b82610862565b60006102ef611641565b60208082015151849052604080519182019052600081526103108282610862565b519392505050565b6040805160208101909152600081526101ca61033936849003840184611c35565b82610af9565b6040805160208101909152600081526101ca61036036849003840184611cf9565b82610cd5565b610376600160005414600b6110bf565b815161039190158061038a57508251600154145b600c6110bf565b6000808055600280546103a390611c6d565b80601f01602080910402602001604051908101604052809291908181526020018280546103cf90611c6d565b801561041c5780601f106103f15761010080835404028352916020019161041c565b820191906000526020600020905b8154815290600101906020018083116103ff57829003601f168201915b50505050508060200190518101906104349190611de7565b905061043e611673565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405161046f929190611e5b565b60405180910390a1610483341560086110bf565b60a0820151515161049690600190611eaf565b81515260a08201805151602090810151835182015290515160409081015183519015159101528201516104d7906104d090339060016110e5565b60096110bf565b81516104ef906001600160a01b03163314600a6110bf565b6020818101805160009081905281519092018290528051604001829052805160600182905251608001526105216116a3565b825181516001600160a01b03918216905260208085015183519216910152606083015160808401516105539190611eaf565b815160409081019190915260208084015181840180519190915251600091015283015161058490620f424090611ec7565b602082018051604001919091528051436060909101526080808501519151015260a083015182516105b891906000906110fd565b60208201805160a0019190915251600060c0909101526105d781611171565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561062a5761062a611a5d565b14156106a1576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561066b5761066b611a5d565b600181111561067c5761067c611a5d565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b6106c1600360005414600f6110bf565b81516106dc9015806106d557508251600154145b60106110bf565b6000808055600280546106ee90611c6d565b80601f016020809104026020016040519081016040528092919081815260200182805461071a90611c6d565b80156107675780601f1061073c57610100808354040283529160200191610767565b820191906000526020600020905b81548152906001019060200180831161074a57829003601f168201915b505050505080602001905181019061077f9190611f54565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633846040516107b2929190611e5b565b60405180910390a16107c63415600d6110bf565b80516107de906001600160a01b03163314600e6110bf565b6107e66116d3565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551820152828501805160009052865181519516949093019390935281514391015260808085015182519093019290925260a084015190519091015261085c816112cf565b50505050565b61087260076000541460176110bf565b815161088d90158061088657508251600154145b60186110bf565b60008080556002805461089f90611c6d565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb90611c6d565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b50505050508060200190518101906109309190611fd1565b90506109486040518060200160405280600081525090565b6109598260400151431060196110bf565b60408051338152855160208083019190915286015151518183015290517f028f10069e3d138251f5b63d2e84687a8240062d4382aa3353ec2f32004dc5519181900360600190a1602084015151516109b590620f424090611ec7565b80825260a08301516109c9911160156110bf565b80516109d890341460166110bf565b33600090815260046020908152604091829020805460ff1916600190811782558783015151519181019190915591519182527f2e55266fb123e9c13b2c3876cc14984d02fc173e832b0bd7a1c2e96e1a37f8f1910160405180910390a160018352610a416116a3565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183519091015260608401516080850151918701515151610a8992906113df565b6020820151526080830151610aa090600190611eaf565b6020808301805190910191909152825181516040015280514360609091015260c084015181516080015260e0840151905160a001528151610100840151610ae79190611eaf565b602082015160c001526105d781611171565b610b09600760005414601c6110bf565b8151610b24901580610b1d57508251600154145b601d6110bf565b600080805560028054610b3690611c6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6290611c6d565b8015610baf5780601f10610b8457610100808354040283529160200191610baf565b820191906000526020600020905b815481529060010190602001808311610b9257829003601f168201915b5050505050806020019051810190610bc79190611fd1565b9050610bdb8160400151431015601e6110bf565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051610c0c929190611e5b565b60405180910390a1610c203415601a6110bf565b8051610c38906001600160a01b03163314601b6110bf565b610c406116a3565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151835182015260608085015183850180519190915260808087015182519095019490945260a08087015182519094019390935280514392019190915260c08086015182519094019390935260e085015181519092019190915261010084015190519091015261085c81611171565b610ce560066000541460136110bf565b8151610d00901580610cf957508251600154145b60146110bf565b600080805560028054610d1290611c6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3e90611c6d565b8015610d8b5780601f10610d6057610100808354040283529160200191610d8b565b820191906000526020600020905b815481529060010190602001808311610d6e57829003601f168201915b5050505050806020019051810190610da3919061206e565b9050610dad6116f3565b604080513381528551602080830191909152860151516001600160a01b03168183015290517fd9d317f50580320260589621a22264dca6ea15fe8bf7bf7ac2b9f0642902ba529181900360600190a1610e08341560116110bf565b8151610e20906001600160a01b0316331460126110bf565b6000602085015151610e31906105de565b516001811115610e4357610e43611a5d565b1415610e525760008152610e98565b6001602085015151610e63906105de565b516001811115610e7557610e75611a5d565b1415610e9857602084015151610e8a906105de565b604001516020820181905281525b6000606082018190525b6005811015610efe5782604001518160058110610ec157610ec1611e83565b602002015160808301819052606083015110610ee1578160600151610ee7565b81608001515b606083015280610ef681612104565b915050610ea2565b50606081015160408201819052815114156110285760c08201515151610f24908061211f565b60a0820180519190915260c08301805151602090810151835182015281515160409081015193519315159301929092528184015191860151519051610f7392919060005b602002015151611447565b610f7b6116d3565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610fc290600190611eaf565b6020808301805192909252868101515182516001600160a01b03909116910152514360409091015260c083015160a083015161100191906000906110fd565b6020820180516060019190915260e0840151905160800152611022816112cf565b5061085c565b6110306116d3565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606080840151825190910152608083015161107790600190611eaf565b602080830180519290925260a085015182516001600160a01b0390911691015280514360409091015260c084015181516060015260e08401519051608001526105d7816112cf565b816101ca5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006110f38385308561145b565b90505b9392505050565b611105611747565b60005b60018110156111515784816001811061112357611123611e83565b602002015182826001811061113a5761113a611e83565b60200201528061114981612104565b915050611108565b508181846001811061116557611165611e83565b60200201529392505050565b805160400151602082015160800151111561118d57600061119a565b6005816020015160200151105b1561125c576111a7611792565b8151516001600160a01b03908116825282516020908101519091168183015282516040908101518184015281840180515160608086019190915281518401516080860152815183015160a08087019190915282519091015160c08087019190915282519091015160e0860152905101516101008401526007600055436001555161123391839101612197565b604051602081830303815290604052600290805190602001906112579291906117fc565b505050565b611264611880565b8151516001600160a01b03908116825282516020908101519091168183015280830180515160408085019190915281518301516060850152815160a0908101516080860152915160c0015191840191909152600360005543600155516112339183910161222b565b50565b8051606001516020820151511015611367576112e96118b3565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015181860152828601805151608080880191909152815185015190951660a087015280519091015160c0860152519092015160e084015260066000554360015590516112339183910161228f565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156113a9573d6000803e3d6000fd5b508051602080820151915190830151606001516113c99291906000610f68565b600080805560018190556112cc906002906118fe565b6113e7611938565b60005b60058110156114335784816005811061140557611405611e83565b602002015182826005811061141c5761141c611e83565b60200201528061142b81612104565b9150506113ea565b508181846005811061116557611165611e83565b611452838383611535565b61125757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916114c291612312565b60006040518083038185875af1925050503d80600081146114ff576040519150601f19603f3d011682016040523d82523d6000602084013e611504565b606091505b509150915061151582826001611606565b508080602001905181019061152a919061232e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161159491612312565b60006040518083038185875af1925050503d80600081146115d1576040519150601f19603f3d011682016040523d82523d6000602084013e6115d6565b606091505b50915091506115e782826002611606565b50808060200190518101906115fc919061232e565b9695505050505050565b606083156116155750816110f6565b8251156116255782518084602001fd5b60405163100960cb60e01b8152600481018390526024016110dc565b60405180604001604052806000815260200161166e60408051808201909152600060208201908152815290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161166e611938565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161166e611956565b60405180604001604052806116e6611992565b815260200161166e6119b1565b6040518060c00160405280600081526020016000815260200160008152602001600081526020016000815260200161166e604051806060016040528060008152602001600081526020016000151581525090565b60405180602001604052806001905b61177c604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816117565790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016117cd611938565b81526020016000815260200160008152602001600081526020016117ef611747565b8152602001600081525090565b82805461180890611c6d565b90600052602060002090601f01602090048101928261182a5760008555611870565b82601f1061184357805160ff1916838001178555611870565b82800160010185558215611870579182015b82811115611870578251825591602001919060010190611855565b5061187c9291506119e2565b5090565b6040805160c0810182526000808252602082015290810161189f611938565b8152602001600081526020016117ef611747565b6040805161010081018252600080825260208201529081016118d3611938565b8152602001600081526020016000815260200160006001600160a01b031681526020016117ef611747565b50805461190a90611c6d565b6000825580601f1061191a575050565b601f0160209004906000526020600020908101906112cc91906119e2565b6040518060a001604052806005906020820280368337509192915050565b6040518060e00160405280611969611938565b8152602001600081526020016000815260200160008152602001600081526020016117ef611747565b60408051608081018252600080825260208201529081016117ef611938565b6040518060a001604052806000815260200160006001600160a01b03168152602001600081526020016117ef611747565b5b8082111561187c57600081556001016119e3565b600060408284031215611a0957600080fd5b50919050565b600060408284031215611a2157600080fd5b6110f683836119f7565b6001600160a01b03811681146112cc57600080fd5b600060208284031215611a5257600080fd5b81356110f681611a2b565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611a9857634e487b7160e01b600052602160045260246000fd5b808352506020830151151560208301526040830151604083015292915050565b60005b83811015611ad3578181015183820152602001611abb565b8381111561085c5750506000910152565b8281526040602082015260008251806040840152611b09816060850160208701611ab8565b601f01601f1916919091016060019392505050565b600060208284031215611b3057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611b7057611b70611b37565b60405290565b6040516020810167ffffffffffffffff81118282101715611b7057611b70611b37565b6040516060810167ffffffffffffffff81118282101715611b7057611b70611b37565b60405160c0810167ffffffffffffffff81118282101715611b7057611b70611b37565b604051610120810167ffffffffffffffff81118282101715611b7057611b70611b37565b604051610100810167ffffffffffffffff81118282101715611b7057611b70611b37565b80151581146112cc57600080fd5b600060408284031215611c4757600080fd5b611c4f611b4d565b823581526020830135611c6181611c27565b60208201529392505050565b600181811c90821680611c8157607f821691505b60208210811415611a0957634e487b7160e01b600052602260045260246000fd5b60008183036040811215611cb557600080fd5b611cbd611b4d565b833581526020601f1983011215611cd357600080fd5b611cdb611b76565b9150611ce5611b76565b602094850135815282529283015250919050565b60008183036040811215611d0c57600080fd5b611d14611b4d565b833581526020601f1983011215611d2a57600080fd5b611d32611b76565b91506020840135611d4281611a2b565b825260208101919091529392505050565b80516106ac81611a2b565b600082601f830112611d6f57600080fd5b611d77611b76565b80606080850186811115611d8a57600080fd5b855b81811015611ddb57828189031215611da45760008081fd5b611dac611b99565b8151815260208083015181830152604080840151611dc981611c27565b90830152908652909401938201611d8c565b50919695505050505050565b60006101008284031215611dfa57600080fd5b611e02611bbc565b8251611e0d81611a2b565b81526020830151611e1d81611a2b565b80602083015250604083015160408201526060830151606082015260808301516080820152611e4f8460a08501611d5e565b60a08201529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611ec257611ec2611e99565b500190565b6000816000190483118215151615611ee157611ee1611e99565b500290565b600082601f830112611ef757600080fd5b60405160a0810181811067ffffffffffffffff82111715611f1a57611f1a611b37565b6040528060a0840185811115611f2f57600080fd5b845b81811015611f49578051835260209283019201611f31565b509195945050505050565b60006101808284031215611f6757600080fd5b611f6f611bbc565b8251611f7a81611a2b565b81526020830151611f8a81611a2b565b6020820152611f9c8460408501611ee6565b604082015260e08301516060820152611fb9846101008501611d5e565b6080820152610160929092015160a083015250919050565b60006101e08284031215611fe457600080fd5b611fec611bdf565b611ff583611d53565b815261200360208401611d53565b60208201526040830151604082015261201f8460608501611ee6565b606082015261010080840151608083015261012084015160a083015261014084015160c0830152612054856101608601611d5e565b60e08301526101c084015181830152508091505092915050565b60006101c0828403121561208157600080fd5b612089611c03565b61209283611d53565b81526120a060208401611d53565b60208201526120b28460408501611ee6565b604082015260e0830151606082015261010083015160808201526120d96101208401611d53565b60a08201526120ec846101408501611d5e565b60c08201526101a0929092015160e083015250919050565b600060001982141561211857612118611e99565b5060010190565b60008282101561213157612131611e99565b500390565b8060005b600581101561085c57815184526020938401939091019060010161213a565b8060005b600181101561085c57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161215d565b81516001600160a01b031681526101e0810160208301516121c360208401826001600160a01b03169052565b506040830151604083015260608301516121e06060840182612136565b506080830151610100818185015260a085015161012085015260c085015161014085015260e08501519150612219610160850183612159565b808501516101c0850152505092915050565b81516001600160a01b0390811682526020808401519091169082015260408083015161018083019161225f90840182612136565b50606083015160e0830152608083015161227d610100840182612159565b5060a083015161016083015292915050565b81516001600160a01b039081168252602080840151909116908201526040808301516101c08301916122c390840182612136565b50606083015160e0830152608083015161010083015260a08301516001600160a01b031661012083015260c0830151612300610140840182612159565b5060e08301516101a083015292915050565b60008251612324818460208701611ab8565b9190910192915050565b60006020828403121561234057600080fd5b81516110f681611c2756fea26469706673582212209be9617ad1a05ce43a17f7416dccb836e73398937a37937b070dc4c90905ee7c64736f6c634300080c0033`,
  BytecodeLen: 10606,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:103:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:81:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:57:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "BidderView": BidderView,
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
