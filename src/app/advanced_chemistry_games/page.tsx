"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Zap, Atom, FlaskConical, RotateCcw, Network, BarChart3, Play, Globe, Award, Target, Home, CheckCircle, XCircle, Beaker, ArrowLeft, Plus, Minus, RotateCw, Calculator, Eye, Settings, Trash2, Save, Dna } from 'lucide-react';

interface LanguageText {
  zh: string;
  en: string;
}

interface GameData {
  id: string;
  title: LanguageText;
  concept: LanguageText;
  description: LanguageText;
  objective: LanguageText;
  difficulty: number;
  icon: string;
  color: string;
  gameplay: LanguageText;
}

const ChemistryGameSuite: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [completedGames, setCompletedGames] = useState<Set<string>>(new Set());

  const getText = (text: LanguageText): string => text[currentLang];

  const games: GameData[] = [
    {
      id: 'electrochemical',
      title: { zh: '电化学电池设计师', en: 'Electrochemical Cell Designer' },
      concept: { zh: '电化学电池和标准电极电位', en: 'Electrochemical cells and standard electrode potentials' },
      description: { zh: '虚拟实验室游戏。玩家从列表中选择两个不同的半电池，必须正确组装盐桥和电压表，查找E°值并计算E°cell，预测电子流动方向。', en: 'A virtual lab game. Players choose two different half-cells from a list, must assemble them correctly with a salt bridge and voltmeter, look up E° values, calculate E°cell, and predict electron flow direction.' },
      objective: { zh: '理解电化学电池的构造原理以及如何使用电极电位预测反应可行性', en: 'To understand how electrochemical cells are constructed and how electrode potentials are used to predict reaction feasibility' },
      difficulty: 4,
      icon: 'zap',
      color: 'from-yellow-500 to-orange-600',
      gameplay: { zh: '拖拽组装电池组件，计算电位差，预测反应方向', en: 'Drag and assemble cell components, calculate potential differences, predict reaction directions' }
    },
    {
      id: 'ligand-swap',
      title: { zh: '配体交换', en: 'Ligand Swap' },
      concept: { zh: '过渡金属络离子和配体交换反应', en: 'Transition metal complex ions and ligand exchange' },
      description: { zh: '视觉拼图游戏。显示水合络离子，玩家添加不同配体，必须从列表中选择正确的新络离子并预测颜色变化。', en: 'A visual puzzle game. An aqueous complex ion is shown, players add different ligands and must select the correct new complex ion and predict color changes.' },
      objective: { zh: '识别常见配体交换反应及其相关的颜色变化', en: 'To recognize common ligand exchange reactions and their associated color changes' },
      difficulty: 3,
      icon: 'atom',
      color: 'from-blue-500 to-purple-600',
      gameplay: { zh: '拖拽配体分子，观察颜色变化，识别络合物结构', en: 'Drag ligand molecules, observe color changes, identify complex structures' }
    },
    {
      id: 'ph-balancer',
      title: { zh: 'pH平衡器', en: 'pH Balancer' },
      concept: { zh: '缓冲溶液和pH计算', en: 'Buffer solutions and pH calculations' },
      description: { zh: '模拟游戏，玩家操作含有缓冲溶液的烧杯，pH显示在仪表上。可添加少量强酸或强碱，观察pH如何抗拒变化，然后计算不同缓冲混合物的pH。', en: 'A simulation where players have a beaker with buffer solution, pH is displayed on a meter. Players can add small amounts of strong acid or base and observe how pH resists change, then calculate pH of different buffer mixtures.' },
      objective: { zh: '理解缓冲溶液的工作原理并计算其pH值', en: 'To understand how buffer solutions work and calculate their pH' },
      difficulty: 3,
      icon: 'flask',
      color: 'from-green-500 to-teal-600',
      gameplay: { zh: '调节溶液组成，监控pH变化，进行缓冲容量计算', en: 'Adjust solution composition, monitor pH changes, perform buffer capacity calculations' }
    },
    {
      id: 'chiral-challenge',
      title: { zh: '手性挑战', en: 'Chiral Challenge' },
      concept: { zh: '手性、手性中心和对映异构体', en: 'Chirality, chiral centers, and enantiomers' },
      description: { zh: '多关卡3D益智游戏。识别手性，标记手性中心，并比较分子对（对映体、非对映体、相同分子）。', en: 'A multi-level 3D puzzle game. Identify chirality, mark chiral centers, and compare pairs of molecules (enantiomers, diastereomers, identical).' },
      objective: { zh: '识别手性中心并理解对映异构体作为不可重叠镜像的概念', en: 'To identify chiral centers and understand enantiomers as non-superimposable mirror images' },
      difficulty: 5,
      icon: 'dna',
      color: 'from-purple-500 to-pink-600',
      gameplay: { zh: '3D分子操作，手性中心标记，对映体识别', en: '3D molecule manipulation, chiral center marking, enantiomer identification' }
    },
    {
      id: 'synthesis-strategist',
      title: { zh: '合成策略师', en: 'Synthesis Strategist' },
      concept: { zh: '多步有机合成', en: 'Multi-step organic synthesis' },
      description: { zh: '路径规划益智游戏。给定起始分子和目标分子，从一个包含干扰项的扩展反应库中选择正确的反应序列。', en: 'A route-planning puzzle game. Given a starting and target molecule, select the correct sequence of reactions from an expanded library that includes distractors.' },
      objective: { zh: '培养规划多步合成路线的技能', en: 'To develop skills in planning multi-step synthetic routes' },
      difficulty: 5,
      icon: 'network',
      color: 'from-red-500 to-orange-600',
      gameplay: { zh: '反应路径设计，试剂选择，合成策略优化', en: 'Reaction pathway design, reagent selection, synthesis strategy optimization' }
    },
    {
      id: 'kinetics-lab',
      title: { zh: '动力学实验室', en: 'Kinetics Lab' },
      concept: { zh: '速率方程、反应级数和速率常数', en: 'Rate equations, order of reaction, and rate constants' },
      description: { zh: '虚拟实验室模拟，玩家为随机生成的反应设计实验。通过策略性地改变浓度来确定反应级数和速率常数。', en: 'A virtual lab simulation where players design experiments for a randomly generated reaction. Determine reaction orders and the rate constant by strategically varying concentrations.' },
      objective: { zh: '理解用初始速率法确定速率方程的方法', en: 'To understand the initial rates method for determining rate equations' },
      difficulty: 4,
      icon: 'chart',
      color: 'from-indigo-500 to-blue-600',
      gameplay: { zh: '实验设计，数据收集，动力学分析，图表绘制', en: 'Experiment design, data collection, kinetics analysis, graph plotting' }
    }
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8" };
    switch (iconName) {
      case 'zap': return <Zap {...iconProps} />;
      case 'atom': return <Atom {...iconProps} />;
      case 'flask': return <FlaskConical {...iconProps} />;
      case 'dna': return <Dna {...iconProps} />;
      case 'network': return <Network {...iconProps} />;
      case 'chart': return <BarChart3 {...iconProps} />;
      default: return <Play {...iconProps} />;
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < difficulty ? 'text-yellow-400' : 'text-gray-400'}`}>
        ★
      </span>
    ));
  };

  const handleGameComplete = (gameId: string): void => {
    setCompletedGames(prev => new Set([...prev, gameId]));
  };

  const currentLangText = {
    title: { zh: '高级化学游戏套件', en: 'Advanced Chemistry Games Suite' },
    subtitle: { zh: '掌握A级化学的高级概念', en: 'Master Advanced A-Level Chemistry Concepts' },
    difficulty: { zh: '难度', en: 'Difficulty' },
    concept: { zh: '化学概念', en: 'Chemistry Concept' },
    objective: { zh: '学习目标', en: 'Learning Objective' },
    gameplay: { zh: '游戏玩法', en: 'Gameplay' },
    playGame: { zh: '开始游戏', en: 'Play Game' },
    completed: { zh: '已完成', en: 'Completed' },
    progress: { zh: '进度', en: 'Progress' },
    games: { zh: '游戏', en: 'Games' },
    backToMenu: { zh: '返回菜单', en: 'Back to Menu' }
  };

  // Enhanced Electrochemical Game
  const ElectrochemicalGame: React.FC = () => {
    const [gameStep, setGameStep] = useState<'setup' | 'assembly' | 'measurement' | 'calculation'>('setup');
    const [selectedAnode, setSelectedAnode] = useState<string>('');
    const [selectedCathode, setSelectedCathode] = useState<string>('');
    const [assemblyComponents, setAssemblyComponents] = useState<{
      saltBridge: boolean;
      voltmeter: boolean;
      wires: boolean;
    }>({ saltBridge: false, voltmeter: false, wires: false });
    const [calculatedVoltage, setCalculatedVoltage] = useState<number | null>(null);
    const [electronFlow, setElectronFlow] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [showDataTable, setShowDataTable] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const electrodeData = [
      { id: 'li', element: 'Li', ion: 'Li⁺', potential: -3.04, name: { zh: '锂', en: 'Lithium' } },
      { id: 'k', element: 'K', ion: 'K⁺', potential: -2.92, name: { zh: '钾', en: 'Potassium' } },
      { id: 'ca', element: 'Ca', ion: 'Ca²⁺', potential: -2.87, name: { zh: '钙', en: 'Calcium' } },
      { id: 'mg', element: 'Mg', ion: 'Mg²⁺', potential: -2.37, name: { zh: '镁', en: 'Magnesium' } },
      { id: 'al', element: 'Al', ion: 'Al³⁺', potential: -1.66, name: { zh: '铝', en: 'Aluminum' } },
      { id: 'zn', element: 'Zn', ion: 'Zn²⁺', potential: -0.76, name: { zh: '锌', en: 'Zinc' } },
      { id: 'fe', element: 'Fe', ion: 'Fe²⁺', potential: -0.44, name: { zh: '铁', en: 'Iron' } },
      { id: 'pb', element: 'Pb', ion: 'Pb²⁺', potential: -0.13, name: { zh: '铅', en: 'Lead' } },
      { id: 'h', element: 'H₂', ion: 'H⁺', potential: 0.00, name: { zh: '氢', en: 'Hydrogen' } },
      { id: 'cu', element: 'Cu', ion: 'Cu²⁺', potential: 0.34, name: { zh: '铜', en: 'Copper' } },
      { id: 'ag', element: 'Ag', ion: 'Ag⁺', potential: 0.80, name: { zh: '银', en: 'Silver' } },
      { id: 'au', element: 'Au', ion: 'Au³⁺', potential: 1.50, name: { zh: '金', en: 'Gold' } }
    ];

    const assemblyItems = [
      { id: 'saltBridge', name: { zh: '盐桥', en: 'Salt Bridge' }, description: { zh: 'KCl盐桥连接两个半电池', en: 'KCl salt bridge connecting two half-cells' } },
      { id: 'voltmeter', name: { zh: '电压表', en: 'Voltmeter' }, description: { zh: '测量电池电动势', en: 'Measures cell EMF' } },
      { id: 'wires', name: { zh: '导线', en: 'Wires' }, description: { zh: '连接电极到外电路', en: 'Connect electrodes to external circuit' } }
    ];

    const handleElectrodeSelection = (electrodeId: string, position: 'anode' | 'cathode'): void => {
      if (position === 'anode') {
        setSelectedAnode(electrodeId);
      } else {
        setSelectedCathode(electrodeId);
      }
    };

    const proceedToAssembly = (): void => {
      if (selectedAnode && selectedCathode && selectedAnode !== selectedCathode) {
        setGameStep('assembly');
        setCurrentStep(2);
      }
    };

    const handleAssemblyClick = (component: keyof typeof assemblyComponents): void => {
      setAssemblyComponents(prev => ({
        ...prev,
        [component]: !prev[component]
      }));
    };

    const proceedToMeasurement = (): void => {
      const allAssembled = Object.values(assemblyComponents).every(Boolean);
      if (allAssembled) {
        setGameStep('measurement');
        setCurrentStep(3);
        
        const anode = electrodeData.find(e => e.id === selectedAnode);
        const cathode = electrodeData.find(e => e.id === selectedCathode);
        if (anode && cathode) {
          const voltage = cathode.potential - anode.potential;
          setCalculatedVoltage(voltage);
        }
      }
    };

    const handleElectronFlowPrediction = (flow: string): void => {
      setElectronFlow(flow);
      
      const anode = electrodeData.find(e => e.id === selectedAnode);
      const cathode = electrodeData.find(e => e.id === selectedCathode);
      
      if (anode && cathode) {
        const correctFlow = anode.potential < cathode.potential ? 'anode-to-cathode' : 'cathode-to-anode';
        if (flow === correctFlow) {
          setScore(prev => prev + 150);
          setGameStep('calculation');
          setCurrentStep(4);
        }
      }
    };

    const resetGame = (): void => {
      setGameStep('setup');
      setSelectedAnode('');
      setSelectedCathode('');
      setAssemblyComponents({ saltBridge: false, voltmeter: false, wires: false });
      setCalculatedVoltage(null);
      setElectronFlow('');
      setCurrentStep(1);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-800 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">
                {getText({ zh: '电化学电池设计师', en: 'Electrochemical Cell Designer' })}
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowDataTable(!showDataTable)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Calculator className="w-4 h-4 inline mr-2" />
                  {getText({ zh: '数据表', en: 'Data Table' })}
                </button>
                <div className="text-white font-semibold">
                  {getText({ zh: '得分', en: 'Score' })}: {score}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-2 mx-2 rounded ${
                      currentStep > step ? 'bg-green-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-2 text-sm text-gray-300">
              {currentStep === 1 && getText({ zh: '选择电极', en: 'Select Electrodes' })}
              {currentStep === 2 && getText({ zh: '组装电池', en: 'Assemble Cell' })}
              {currentStep === 3 && getText({ zh: '测量与预测', en: 'Measure & Predict' })}
              {currentStep === 4 && getText({ zh: '计算验证', en: 'Calculate & Verify' })}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              {gameStep === 'setup' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤1：选择半电池电极', en: 'Step 1: Select Half-Cell Electrodes' })}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        {getText({ zh: '阳极 (氧化)', en: 'Anode (Oxidation)' })}
                      </h4>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {electrodeData.map(electrode => (
                          <button
                            key={electrode.id}
                            onClick={() => handleElectrodeSelection(electrode.id, 'anode')}
                            className={`w-full p-3 rounded-lg border text-left transition-colors ${
                              selectedAnode === electrode.id
                                ? 'border-yellow-400 bg-yellow-500/20 text-yellow-200'
                                : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                            }`}
                          >
                            <div className="font-semibold">{electrode.element}/{electrode.ion}</div>
                            <div className="text-sm opacity-80">E° = {electrode.potential}V</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        {getText({ zh: '阴极 (还原)', en: 'Cathode (Reduction)' })}
                      </h4>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {electrodeData.map(electrode => (
                          <button
                            key={electrode.id}
                            onClick={() => handleElectrodeSelection(electrode.id, 'cathode')}
                            className={`w-full p-3 rounded-lg border text-left transition-colors ${
                              selectedCathode === electrode.id
                                ? 'border-blue-400 bg-blue-500/20 text-blue-200'
                                : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                            }`}
                          >
                            <div className="font-semibold">{electrode.element}/{electrode.ion}</div>
                            <div className="text-sm opacity-80">E° = {electrode.potential}V</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={proceedToAssembly}
                    disabled={!selectedAnode || !selectedCathode || selectedAnode === selectedCathode}
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 
                             text-white rounded-lg font-semibold transition-colors"
                  >
                    {getText({ zh: '进入组装步骤', en: 'Proceed to Assembly' })}
                  </button>
                </div>
              )}

              {gameStep === 'assembly' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤2：组装电化学电池', en: 'Step 2: Assemble Electrochemical Cell' })}
                  </h3>
                  <div className="bg-black/20 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-center h-40">
                      <div className="grid grid-cols-5 gap-4 items-center w-full max-w-2xl">
                        <div className="text-center">
                          <div className="w-20 h-24 bg-red-600/50 border-2 border-red-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <div className="text-white font-bold text-sm">
                              {electrodeData.find(e => e.id === selectedAnode)?.element}
                            </div>
                          </div>
                          <div className="text-red-300 text-xs">Anode</div>
                        </div>

                        <div className="flex justify-center">
                          <div className={`w-8 h-1 transition-colors ${
                            assemblyComponents.wires ? 'bg-yellow-400' : 'bg-gray-600'
                          }`} />
                        </div>

                        <div className="text-center">
                          <div className={`w-16 h-16 border-2 rounded mx-auto mb-2 flex items-center justify-center transition-colors ${
                            assemblyComponents.voltmeter 
                              ? 'border-green-400 bg-green-500/20 text-green-300'
                              : 'border-gray-600 bg-gray-600/20 text-gray-400'
                          }`}>
                            <span className="text-xs font-bold">V</span>
                          </div>
                          <div className="text-xs">Voltmeter</div>
                        </div>

                        <div className="flex justify-center">
                          <div className={`w-8 h-1 transition-colors ${
                            assemblyComponents.wires ? 'bg-yellow-400' : 'bg-gray-600'
                          }`} />
                        </div>

                        <div className="text-center">
                          <div className="w-20 h-24 bg-blue-600/50 border-2 border-blue-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <div className="text-white font-bold text-sm">
                              {electrodeData.find(e => e.id === selectedCathode)?.element}
                            </div>
                          </div>
                          <div className="text-blue-300 text-xs">Cathode</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <div className={`w-32 h-3 rounded-full transition-colors ${
                        assemblyComponents.saltBridge ? 'bg-purple-500' : 'bg-gray-600'
                      }`}>
                        <div className="text-white text-xs text-center mt-1">
                          {assemblyComponents.saltBridge ? 'KCl Bridge' : ''}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {assemblyItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleAssemblyClick(item.id as keyof typeof assemblyComponents)}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${
                          assemblyComponents[item.id as keyof typeof assemblyComponents]
                            ? 'border-green-400 bg-green-500/20 text-green-200'
                            : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                        }`}
                      >
                        <div className="font-semibold mb-1">{getText(item.name)}</div>
                        <div className="text-xs opacity-80">{getText(item.description)}</div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={proceedToMeasurement}
                    disabled={!Object.values(assemblyComponents).every(Boolean)}
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 
                             text-white rounded-lg font-semibold transition-colors"
                  >
                    {getText({ zh: '进入测量步骤', en: 'Proceed to Measurement' })}
                  </button>
                </div>
              )}

              {gameStep === 'measurement' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤3：测量电压并预测电子流向', en: 'Step 3: Measure Voltage & Predict Electron Flow' })}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '电压表读数', en: 'Voltmeter Reading' })}
                      </h4>
                      <div className="w-32 h-32 bg-black border-4 border-white rounded-full mx-auto flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-green-400 text-2xl font-bold">
                            {calculatedVoltage?.toFixed(2)}V
                          </div>
                          <div className="text-white text-xs">EMF</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '预测电子流向', en: 'Predict Electron Flow' })}
                      </h4>
                      <div className="space-y-3">
                        <button
                          onClick={() => handleElectronFlowPrediction('anode-to-cathode')}
                          className={`w-full p-3 rounded-lg border transition-colors ${
                            electronFlow === 'anode-to-cathode'
                              ? 'border-yellow-400 bg-yellow-500/20 text-yellow-200'
                              : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                          }`}
                        >
                          {getText({ zh: '阳极 → 阴极', en: 'Anode → Cathode' })}
                        </button>
                        <button
                          onClick={() => handleElectronFlowPrediction('cathode-to-anode')}
                          className={`w-full p-3 rounded-lg border transition-colors ${
                            electronFlow === 'cathode-to-anode'
                              ? 'border-yellow-400 bg-yellow-500/20 text-yellow-200'
                              : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                          }`}
                        >
                          {getText({ zh: '阴极 → 阳极', en: 'Cathode → Anode' })}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {gameStep === 'calculation' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤4：计算验证', en: 'Step 4: Calculation & Verification' })}
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-3">
                        {getText({ zh: '计算步骤', en: 'Calculation Steps' })}
                      </h4>
                      {(() => {
                        const anode = electrodeData.find(e => e.id === selectedAnode);
                        const cathode = electrodeData.find(e => e.id === selectedCathode);
                        return (
                          <div className="text-white space-y-2 font-mono">
                            <div>E°(cathode) = {cathode?.potential}V</div>
                            <div>E°(anode) = {anode?.potential}V</div>
                            <div className="border-t border-white/30 pt-2">
                              E°cell = E°(cathode) - E°(anode)
                            </div>
                            <div>E°cell = {cathode?.potential} - ({anode?.potential}) = {calculatedVoltage?.toFixed(2)}V</div>
                            <div className="pt-2">
                              {calculatedVoltage && calculatedVoltage > 0 
                                ? getText({ zh: '反应自发进行 (ΔG < 0)', en: 'Reaction is spontaneous (ΔG < 0)' })
                                : getText({ zh: '反应不自发 (ΔG > 0)', en: 'Reaction is non-spontaneous (ΔG > 0)' })
                              }
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-green-200 font-semibold">
                        {getText({ zh: '电池设计完成！', en: 'Cell Design Complete!' })}
                      </div>
                      <div className="text-green-300 text-sm mt-1">
                        {getText({ zh: `获得 ${score} 分`, en: `Earned ${score} points` })}
                      </div>
                    </div>

                    <button
                      onClick={resetGame}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      {getText({ zh: '重新开始', en: 'Start New Cell' })}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {showDataTable && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3">
                    {getText({ zh: '标准电极电位表', en: 'Standard Electrode Potentials' })}
                  </h4>
                  <div className="max-h-60 overflow-y-auto">
                    <table className="w-full text-white text-sm">
                      <thead>
                        <tr className="border-b border-white/30">
                          <th className="text-left p-1">
                            {getText({ zh: '电极', en: 'Electrode' })}
                          </th>
                          <th className="text-right p-1">E° (V)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {electrodeData.map(electrode => (
                          <tr key={electrode.id} className="border-b border-white/10">
                            <td className="p-1">{electrode.element}/{electrode.ion}</td>
                            <td className="text-right p-1">{electrode.potential}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">
                  {getText({ zh: '实验步骤', en: 'Experimental Steps' })}
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className={`p-2 rounded ${currentStep >= 1 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    1. {getText({ zh: '选择两个不同的半电池电极', en: 'Select two different half-cell electrodes' })}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 2 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    2. {getText({ zh: '组装盐桥、电压表和导线', en: 'Assemble salt bridge, voltmeter, and wires' })}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 3 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    3. {getText({ zh: '测量电压并预测电子流向', en: 'Measure voltage and predict electron flow' })}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 4 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    4. {getText({ zh: '验证计算结果', en: 'Verify calculation results' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Ligand Swap Game
  const LigandSwapGame: React.FC = () => {
    const [currentLevel, setCurrentLevel] = useState<number>(0);
    const [currentComplex, setCurrentComplex] = useState<string>('cu-water');
    const [selectedNewComplex, setSelectedNewComplex] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
    const [predictedColor, setPredictedColor] = useState<string>('');

    const complexes = [
      { id: 'cu-water', formula: '[Cu(H₂O)₆]²⁺', color: '#87CEEB', name: { zh: '六水合铜(II)离子', en: 'Hexaaquacopper(II) ion' }, description: { zh: '浅蓝色', en: 'Pale blue' } },
      { id: 'cu-ammonia', formula: '[Cu(NH₃)₄(H₂O)₂]²⁺', color: '#0066CC', name: { zh: '四氨合铜(II)离子', en: 'Tetraamminecopper(II) ion' }, description: { zh: '深蓝色', en: 'Deep blue' } },
      { id: 'cu-chloride', formula: '[CuCl₄]²⁻', color: '#228B22', name: { zh: '四氯合铜(II)离子', en: 'Tetrachlorocopper(II) ion' }, description: { zh: '黄绿色', en: 'Yellow-green' } },
      { id: 'cu-hydroxide', formula: '[Cu(OH)₄]²⁻', color: '#4169E1', name: { zh: '四羟基合铜(II)离子', en: 'Tetrahydroxocopper(II) ion' }, description: { zh: '深蓝色', en: 'Deep blue' } },
      { id: 'fe-water', formula: '[Fe(H₂O)₆]³⁺', color: '#DDA0DD', name: { zh: '六水合铁(III)离子', en: 'Hexaaquairon(III) ion' }, description: { zh: '淡紫色', en: 'Pale violet' } },
      { id: 'fe-thiocyanate', formula: '[Fe(SCN)(H₂O)₅]²⁺', color: '#8B0000', name: { zh: '硫氰酸合铁(III)络离子', en: 'Iron(III) thiocyanate complex' }, description: { zh: '血红色', en: 'Blood red' } }
    ];

    const ligands = [
      { id: 'nh3', formula: 'NH₃', name: { zh: '氨', en: 'Ammonia' }, color: '#10B981', strength: 'strong', denticity: 1 },
      { id: 'cl', formula: 'Cl⁻', name: { zh: '氯离子', en: 'Chloride' }, color: '#F59E0B', strength: 'weak', denticity: 1 },
      { id: 'oh', formula: 'OH⁻', name: { zh: '氢氧根离子', en: 'Hydroxide' }, color: '#8B5CF6', strength: 'strong', denticity: 1 },
      { id: 'scn', formula: 'SCN⁻', name: { zh: '硫氰酸根离子', en: 'Thiocyanate' }, color: '#EF4444', strength: 'medium', denticity: 1 }
    ];

    const colorOptions = [
      { id: 'pale-blue', name: { zh: '浅蓝色', en: 'Pale blue' }, color: '#87CEEB' },
      { id: 'deep-blue', name: { zh: '深蓝色', en: 'Deep blue' }, color: '#0066CC' },
      { id: 'yellow-green', name: { zh: '黄绿色', en: 'Yellow-green' }, color: '#228B22' },
      { id: 'blood-red', name: { zh: '血红色', en: 'Blood red' }, color: '#8B0000' },
      { id: 'pale-violet', name: { zh: '淡紫色', en: 'Pale violet' }, color: '#DDA0DD' }
    ];

    const levels = [
      { initial: 'cu-water', ligand: 'nh3', target: 'cu-ammonia', hint: { zh: '氨是强配体，会取代水分子', en: 'Ammonia is a strong ligand that displaces water' } },
      { initial: 'cu-water', ligand: 'cl', target: 'cu-chloride', hint: { zh: '高浓度氯离子可以取代水分子', en: 'High concentration chloride can displace water' } },
      { initial: 'fe-water', ligand: 'scn', target: 'fe-thiocyanate', hint: { zh: '硫氰酸根与铁(III)形成血红色络合物', en: 'Thiocyanate forms blood red complex with Fe(III)' } }
    ];

    const currentLevelData = levels[currentLevel];
    const currentComplexData = complexes.find(c => c.id === currentComplex);

    const handleLigandAddition = (ligandId: string): void => {
      if (ligandId === currentLevelData.ligand) {
        setCurrentComplex(currentLevelData.target);
        setShowColorPicker(true);
      }
    };

    const handleComplexSelection = (complexId: string): void => {
      setSelectedNewComplex(complexId);
    };

    const handleColorPrediction = (colorId: string): void => {
      setPredictedColor(colorId);
      
      const targetComplex = complexes.find(c => c.id === currentLevelData.target);
      const correctColor = colorOptions.find(c => c.color === targetComplex?.color);
      
      if (selectedNewComplex === currentLevelData.target && colorId === correctColor?.id) {
        setScore(prev => prev + 200);
        setFeedback(getText({ zh: '完全正确！', en: 'Perfect!' }));
        setTimeout(() => {
          if (currentLevel < levels.length - 1) {
            setCurrentLevel(prev => prev + 1);
            resetLevel();
          }
        }, 2000);
      } else {
        setFeedback(getText({ zh: '请重新检查答案', en: 'Please check your answers' }));
      }
    };

    const resetLevel = (): void => {
      const newLevelIndex = currentLevel < levels.length - 1 ? currentLevel + 1 : 0;
      const newLevel = levels[newLevelIndex];
      setCurrentComplex(newLevel.initial);
      setSelectedNewComplex('');
      setPredictedColor('');
      setShowColorPicker(false);
      setFeedback('');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-white">
                {getText({ zh: '配体交换游戏', en: 'Ligand Swap Game' })}
              </h2>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  {getText({ zh: '关卡', en: 'Level' })}: {currentLevel + 1}/{levels.length}
                </div>
                <div className="text-white">
                  {getText({ zh: '得分', en: 'Score' })}: {score}
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">
                {getText({ zh: '任务提示', en: 'Mission Hint' })}
              </h4>
              <p className="text-blue-200">{getText(currentLevelData.hint)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {getText({ zh: '当前络合物', en: 'Current Complex' })}
              </h3>
              
              <div className="text-center mb-6">
                <div 
                  className="w-48 h-48 mx-auto rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ backgroundColor: currentComplexData?.color }}
                >
                  <div className="text-center">
                    <div className="text-sm mb-2">{currentComplexData?.formula}</div>
                    <div className="text-xs">{getText(currentComplexData?.name || { zh: '', en: '' })}</div>
                  </div>
                </div>
                <p className="text-white mt-4 font-semibold">
                  {getText(currentComplexData?.description || { zh: '', en: '' })}
                </p>
              </div>

              <h4 className="text-white font-semibold mb-3">
                {getText({ zh: '添加配体', en: 'Add Ligand' })}
              </h4>
              <div className="space-y-3">
                {ligands.map(ligand => (
                  <button
                    key={ligand.id}
                    onClick={() => handleLigandAddition(ligand.id)}
                    className="w-full p-4 rounded-lg border-2 border-white/30 hover:border-white/50 transition-colors text-white"
                    style={{ backgroundColor: ligand.color + '40' }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold">{ligand.formula}</div>
                        <div className="text-sm">{getText(ligand.name)}</div>
                      </div>
                      <div className="text-xs">
                        <div>{getText({ zh: '强度', en: 'Strength' })}: {ligand.strength}</div>
                        <div>{getText({ zh: '齿数', en: 'Denticity' })}: {ligand.denticity}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {getText({ zh: '选择新络合物', en: 'Select New Complex' })}
              </h3>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {complexes.map(complex => (
                  <button
                    key={complex.id}
                    onClick={() => handleComplexSelection(complex.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                      selectedNewComplex === complex.id
                        ? 'border-yellow-400 bg-yellow-500/20'
                        : 'border-white/30 bg-white/10 hover:border-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-white"
                        style={{ backgroundColor: complex.color }}
                      />
                      <div>
                        <div className="text-white font-semibold">{complex.formula}</div>
                        <div className="text-gray-300 text-sm">{getText(complex.name)}</div>
                        <div className="text-gray-400 text-xs">{getText(complex.description)}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {getText({ zh: '预测颜色变化', en: 'Predict Color Change' })}
              </h3>

              {showColorPicker ? (
                <div className="space-y-3">
                  <p className="text-white text-center mb-4">
                    {getText({ zh: '新络合物的颜色是什么？', en: 'What color is the new complex?' })}
                  </p>
                  
                  {colorOptions.map(color => (
                    <button
                      key={color.id}
                      onClick={() => handleColorPrediction(color.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-colors ${
                        predictedColor === color.id
                          ? 'border-yellow-400 bg-yellow-500/20'
                          : 'border-white/30 bg-white/10 hover:border-white/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-white"
                          style={{ backgroundColor: color.color }}
                        />
                        <span className="text-white">{getText(color.name)}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <Beaker className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>{getText({ zh: '请先添加配体', en: 'Please add a ligand first' })}</p>
                </div>
              )}

              <div className="mt-6 p-4 bg-black/20 rounded-lg">
                <h4 className="text-white font-semibold mb-3">
                  {getText({ zh: '配体强度序列', en: 'Ligand Strength Series' })}
                </h4>
                <div className="text-sm text-gray-300">
                  <div className="font-mono">
                    I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; H₂O &lt; NH₃ &lt; NO₂⁻ &lt; CN⁻
                  </div>
                  <div className="mt-2 text-xs">
                    {getText({ zh: '强配体能取代弱配体', en: 'Strong ligands can displace weak ligands' })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {feedback && (
            <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${
              feedback.includes('正确') || feedback.includes('Perfect')
                ? 'bg-green-500/20 border border-green-400 text-green-200'
                : 'bg-yellow-500/20 border border-yellow-400 text-yellow-200'
            }`}>
              <div className="flex items-center justify-center gap-2">
                {feedback.includes('正确') || feedback.includes('Perfect') ? 
                  <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                {feedback}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Enhanced pH Balancer Game
  const PHBalancerGame: React.FC = () => {
    const [gamePhase, setGamePhase] = useState<'preparation' | 'buffer-setup' | 'testing' | 'calculation'>('preparation');
    const [selectedBuffer, setSelectedBuffer] = useState<string>('');
    const [bufferConcentration, setBufferConcentration] = useState<{acid: number, base: number}>({acid: 0.1, base: 0.1});
    const [currentPH, setCurrentPH] = useState<number>(7.0);
    const [targetPH, setTargetPH] = useState<number>(4.74);
    const [addedAcid, setAddedAcid] = useState<number>(0);
    const [addedBase, setAddedBase] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [phHistory, setPhHistory] = useState<{time: number, ph: number, added: string}[]>([]);
    const [showCalculations, setShowCalculations] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);

    const bufferSystems = [
      { id: 'acetate', name: { zh: '醋酸/醋酸钠缓冲液', en: 'Acetate Buffer (CH₃COOH/CH₃COO⁻)' }, weakAcid: 'CH₃COOH', conjugateBase: 'CH₃COO⁻', pKa: 4.74, effectiveRange: [3.74, 5.74], description: { zh: '最常用的缓冲系统，pKa = 4.74', en: 'Most common buffer system, pKa = 4.74' } },
      { id: 'phosphate', name: { zh: '磷酸氢盐缓冲液', en: 'Phosphate Buffer (H₂PO₄⁻/HPO₄²⁻)' }, weakAcid: 'H₂PO₄⁻', conjugateBase: 'HPO₄²⁻', pKa: 7.21, effectiveRange: [6.21, 8.21], description: { zh: '生理pH缓冲系统，pKa = 7.21', en: 'Physiological pH buffer system, pKa = 7.21' } },
      { id: 'carbonate', name: { zh: '碳酸氢盐缓冲液', en: 'Carbonate Buffer (H₂CO₃/HCO₃⁻)' }, weakAcid: 'H₂CO₃', conjugateBase: 'HCO₃⁻', pKa: 6.35, effectiveRange: [5.35, 7.35], description: { zh: '血液缓冲系统，pKa = 6.35', en: 'Blood buffer system, pKa = 6.35' } },
      { id: 'tris', name: { zh: 'Tris缓冲液', en: 'Tris Buffer (Tris-H⁺/Tris)' }, weakAcid: 'Tris-H⁺', conjugateBase: 'Tris', pKa: 8.07, effectiveRange: [7.07, 9.07], description: { zh: '生化实验常用，pKa = 8.07', en: 'Common in biochemistry, pKa = 8.07' } }
    ];

    const reagents = [
      { id: 'hcl', name: '0.1M HCl', type: 'strong-acid', strength: 0.1 },
      { id: 'naoh', name: '0.1M NaOH', type: 'strong-base', strength: 0.1 },
      { id: 'hcl-dilute', name: '0.01M HCl', type: 'strong-acid', strength: 0.01 },
      { id: 'naoh-dilute', name: '0.01M NaOH', type: 'strong-base', strength: 0.01 }
    ];

    const selectedBufferData = bufferSystems.find(b => b.id === selectedBuffer);

    const calculateBufferPH = (acidConc: number, baseConc: number, pKa: number): number => {
      if (baseConc <= 0) return 0;
      if (acidConc <= 0) return 14;
      return pKa + Math.log10(baseConc / acidConc);
    };

    const handleBufferSelection = (bufferId: string): void => {
      setSelectedBuffer(bufferId);
      const buffer = bufferSystems.find(b => b.id === bufferId);
      if (buffer) {
        setTargetPH(buffer.pKa);
        setCurrentPH(calculateBufferPH(0.1, 0.1, buffer.pKa));
      }
    };

    const proceedToBufferSetup = (): void => {
      if (selectedBuffer) {
        setGamePhase('buffer-setup');
        setCurrentStep(2);
      }
    };

    const handleConcentrationChange = (component: 'acid' | 'base', value: number): void => {
      const newConc = { ...bufferConcentration, [component]: value };
      setBufferConcentration(newConc);
      
      if (selectedBufferData) {
        const newPH = calculateBufferPH(newConc.acid, newConc.base, selectedBufferData.pKa);
        setCurrentPH(newPH);
      }
    };

    const proceedToTesting = (): void => {
      setGamePhase('testing');
      setCurrentStep(3);
      setPhHistory([{time: 0, ph: currentPH, added: 'Initial buffer'}]);
    };

    const addReagent = (reagentId: string, volume: number): void => {
      const reagent = reagents.find(r => r.id === reagentId);
      if (!reagent || !selectedBufferData) return;

      const totalVolume = 100;
      const moles = reagent.strength * (volume / 1000);

      let newAcidConc = bufferConcentration.acid;
      let newBaseConc = bufferConcentration.base;

      if (reagent.type === 'strong-acid') {
        newBaseConc = Math.max(0, newBaseConc - moles / (totalVolume / 1000));
        newAcidConc = newAcidConc + moles / (totalVolume / 1000);
        setAddedAcid(prev => prev + volume);
      } else if (reagent.type === 'strong-base') {
        newAcidConc = Math.max(0, newAcidConc - moles / (totalVolume / 1000));
        newBaseConc = newBaseConc + moles / (totalVolume / 1000);
        setAddedBase(prev => prev + volume);
      }

      setBufferConcentration({acid: newAcidConc, base: newBaseConc});
      const newPH = calculateBufferPH(newAcidConc, newBaseConc, selectedBufferData.pKa);
      setCurrentPH(newPH);

      setPhHistory(prev => [...prev, {
        time: prev.length,
        ph: newPH,
        added: `${volume}mL ${reagent.name}`
      }]);

      if (Math.abs(newPH - targetPH) < 0.05) {
        setScore(prev => prev + 150);
        setGamePhase('calculation');
        setCurrentStep(4);
      }
    };

    const setNewTarget = (): void => {
      if (selectedBufferData) {
        const minPH = selectedBufferData.effectiveRange[0];
        const maxPH = selectedBufferData.effectiveRange[1];
        const newTarget = minPH + Math.random() * (maxPH - minPH);
        setTargetPH(Number(newTarget.toFixed(2)));
      }
    };

    const resetExperiment = (): void => {
      setGamePhase('preparation');
      setSelectedBuffer('');
      setBufferConcentration({acid: 0.1, base: 0.1});
      setCurrentPH(7.0);
      setAddedAcid(0);
      setAddedBase(0);
      setPhHistory([]);
      setCurrentStep(1);
    };

    const getPHColor = (ph: number): string => {
      if (ph <= 2) return '#FF0000';
      if (ph <= 4) return '#FF6600';
      if (ph <= 6) return '#FFCC00';
      if (ph <= 8) return '#66FF66';
      if (ph <= 10) return '#0066FF';
      if (ph <= 12) return '#0000FF';
      return '#9900FF';
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-800 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">
                {getText({ zh: 'pH平衡器 - 缓冲溶液实验室', en: 'pH Balancer - Buffer Solution Lab' })}
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowCalculations(!showCalculations)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Calculator className="w-4 h-4 inline mr-2" />
                  {getText({ zh: '计算公式', en: 'Calculations' })}
                </button>
                <div className="text-white font-semibold">
                  {getText({ zh: '得分', en: 'Score' })}: {score}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className={`flex items-center ${step < 4 ? 'flex-1' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-2 mx-2 rounded ${
                      currentStep > step ? 'bg-green-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-2 text-sm text-gray-300">
              {currentStep === 1 && getText({ zh: '选择缓冲系统', en: 'Select Buffer System' })}
              {currentStep === 2 && getText({ zh: '配制缓冲溶液', en: 'Prepare Buffer Solution' })}
              {currentStep === 3 && getText({ zh: '调节pH值', en: 'Adjust pH Value' })}
              {currentStep === 4 && getText({ zh: '计算分析', en: 'Calculate & Analyze' })}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              {gamePhase === 'preparation' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤1：选择缓冲系统', en: 'Step 1: Select Buffer System' })}
                  </h3>
                  
                  <div className="space-y-4">
                    {bufferSystems.map(buffer => (
                      <button
                        key={buffer.id}
                        onClick={() => handleBufferSelection(buffer.id)}
                        className={`w-full p-6 rounded-lg border-2 text-left transition-colors ${
                          selectedBuffer === buffer.id
                            ? 'border-green-400 bg-green-500/20'
                            : 'border-white/30 bg-white/10 hover:border-white/50'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-white font-bold text-lg">{getText(buffer.name)}</h4>
                            <p className="text-gray-300 text-sm">{getText(buffer.description)}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-cyan-300 font-bold">pKa = {buffer.pKa}</div>
                            <div className="text-cyan-400 text-sm">
                              pH范围: {buffer.effectiveRange[0]} - {buffer.effectiveRange[1]}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-red-500/20 border border-red-400/30 rounded p-2">
                            <span className="text-red-300 font-semibold">
                              {getText({ zh: '弱酸', en: 'Weak Acid' })}: 
                            </span>
                            <span className="text-white ml-1">{buffer.weakAcid}</span>
                          </div>
                          <div className="bg-blue-500/20 border border-blue-400/30 rounded p-2">
                            <span className="text-blue-300 font-semibold">
                              {getText({ zh: '共轭碱', en: 'Conjugate Base' })}: 
                            </span>
                            <span className="text-white ml-1">{buffer.conjugateBase}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={proceedToBufferSetup}
                    disabled={!selectedBuffer}
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 
                             text-white rounded-lg font-semibold transition-colors"
                  >
                    {getText({ zh: '进入配制步骤', en: 'Proceed to Buffer Preparation' })}
                  </button>
                </div>
              )}

              {gamePhase === 'buffer-setup' && selectedBufferData && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤2：配制缓冲溶液', en: 'Step 2: Prepare Buffer Solution' })}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '调节浓度 (mol/L)', en: 'Adjust Concentrations (mol/L)' })}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-red-300 font-semibold mb-2">
                            [{selectedBufferData.weakAcid}] = {bufferConcentration.acid.toFixed(3)} M
                          </label>
                          <input
                            type="range"
                            min="0.01"
                            max="0.5"
                            step="0.01"
                            value={bufferConcentration.acid}
                            onChange={(e) => handleConcentrationChange('acid', Number(e.target.value))}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-blue-300 font-semibold mb-2">
                            [{selectedBufferData.conjugateBase}] = {bufferConcentration.base.toFixed(3)} M
                          </label>
                          <input
                            type="range"
                            min="0.01"
                            max="0.5"
                            step="0.01"
                            value={bufferConcentration.base}
                            onChange={(e) => handleConcentrationChange('base', Number(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-yellow-500/20 border border-yellow-400/30 rounded">
                        <h5 className="text-yellow-300 font-semibold mb-2">
                          {getText({ zh: '目标pH', en: 'Target pH' })}
                        </h5>
                        <div className="text-yellow-200 text-2xl font-bold">{targetPH}</div>
                        <button
                          onClick={setNewTarget}
                          className="mt-2 px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm"
                        >
                          {getText({ zh: '新目标', en: 'New Target' })}
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '当前pH值', en: 'Current pH' })}
                      </h4>
                      
                      <div className="relative w-48 h-48 mx-auto">
                        <div 
                          className="w-full h-full rounded-full border-8 border-white flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                          style={{ backgroundColor: getPHColor(currentPH) }}
                        >
                          {currentPH.toFixed(2)}
                        </div>
                        
                        <div className="absolute -bottom-8 left-0 right-0">
                          <div className="flex justify-between text-xs text-gray-300">
                            <span>0</span>
                            <span>7</span>
                            <span>14</span>
                          </div>
                          <div className="w-full h-2 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded mt-1"></div>
                        </div>
                      </div>

                      <div className="mt-6 p-3 bg-black/20 rounded font-mono text-sm">
                        <div className="text-green-300">pH = pKa + log([A⁻]/[HA])</div>
                        <div className="text-white">
                          pH = {selectedBufferData.pKa} + log({bufferConcentration.base.toFixed(3)}/{bufferConcentration.acid.toFixed(3)})
                        </div>
                        <div className="text-cyan-300">pH = {currentPH.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={proceedToTesting}
                    className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    {getText({ zh: '开始pH调节', en: 'Start pH Adjustment' })}
                  </button>
                </div>
              )}

              {gamePhase === 'testing' && selectedBufferData && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤3：精确调节pH值', en: 'Step 3: Fine-tune pH Value' })}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '添加试剂', en: 'Add Reagents' })}
                      </h4>
                      
                      <div className="space-y-4">
                        {reagents.map(reagent => (
                          <div key={reagent.id} className="bg-black/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-white font-semibold">{reagent.name}</span>
                              <span className={`text-sm px-2 py-1 rounded ${
                                reagent.type === 'strong-acid' ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'
                              }`}>
                                {reagent.type === 'strong-acid' ? 
                                  getText({ zh: '强酸', en: 'Strong Acid' }) : 
                                  getText({ zh: '强碱', en: 'Strong Base' })
                                }
                              </span>
                            </div>
                            
                            <div className="flex gap-2">
                              {[0.1, 0.5, 1.0, 2.0].map(volume => (
                                <button
                                  key={volume}
                                  onClick={() => addReagent(reagent.id, volume)}
                                  className={`flex-1 py-2 px-3 rounded text-white transition-colors ${
                                    reagent.type === 'strong-acid' 
                                      ? 'bg-red-600 hover:bg-red-700' 
                                      : 'bg-blue-600 hover:bg-blue-700'
                                  }`}
                                >
                                  +{volume}mL
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-red-500/20 border border-red-400/30 rounded p-3 text-center">
                          <div className="text-red-300 font-semibold">
                            {getText({ zh: '已加酸', en: 'Acid Added' })}
                          </div>
                          <div className="text-white text-lg">{addedAcid.toFixed(1)} mL</div>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-400/30 rounded p-3 text-center">
                          <div className="text-blue-300 font-semibold">
                            {getText({ zh: '已加碱', en: 'Base Added' })}
                          </div>
                          <div className="text-white text-lg">{addedBase.toFixed(1)} mL</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-4">
                        {getText({ zh: '实时监控', en: 'Real-time Monitoring' })}
                      </h4>
                      
                      <div className="text-center mb-6">
                        <div 
                          className="w-32 h-32 mx-auto rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-2xl"
                          style={{ backgroundColor: getPHColor(currentPH) }}
                        >
                          {currentPH.toFixed(2)}
                        </div>
                        <div className="mt-2 text-gray-300">
                          {getText({ zh: '当前pH', en: 'Current pH' })}
                        </div>
                      </div>

                      <div className="bg-yellow-500/20 border border-yellow-400/30 rounded p-3 text-center mb-4">
                        <div className="text-yellow-300 font-semibold">
                          {getText({ zh: '目标pH', en: 'Target pH' })}
                        </div>
                        <div className="text-yellow-200 text-xl">{targetPH}</div>
                        <div className="text-yellow-400 text-sm">
                          {getText({ zh: '差值', en: 'Difference' })}: {Math.abs(currentPH - targetPH).toFixed(2)}
                        </div>
                      </div>

                      <div className="bg-black/20 rounded p-3">
                        <h5 className="text-white font-semibold mb-2">
                          {getText({ zh: 'pH变化历史', en: 'pH Change History' })}
                        </h5>
                        <div className="max-h-32 overflow-y-auto space-y-1 text-xs">
                          {phHistory.map((entry, index) => (
                            <div key={index} className="flex justify-between text-gray-300">
                              <span>{entry.added}</span>
                              <span className="font-mono" style={{ color: getPHColor(entry.ph) }}>
                                pH {entry.ph.toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {gamePhase === 'calculation' && selectedBufferData && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {getText({ zh: '步骤4：计算分析', en: 'Step 4: Calculation & Analysis' })}
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-green-200 font-semibold">
                        {getText({ zh: '成功达到目标pH！', en: 'Successfully reached target pH!' })}
                      </div>
                      <div className="text-green-300 text-sm">
                        {getText({ zh: '最终pH', en: 'Final pH' })}: {currentPH.toFixed(2)} 
                        {getText({ zh: '（目标：', en: ' (Target: ' })}{targetPH}{getText({ zh: '）', en: ')' })}
                      </div>
                    </div>

                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-3">
                        {getText({ zh: 'Henderson-Hasselbalch方程计算', en: 'Henderson-Hasselbalch Equation Calculation' })}
                      </h4>
                      <div className="font-mono text-white space-y-2">
                        <div>pH = pKa + log([A⁻]/[HA])</div>
                        <div>pH = {selectedBufferData.pKa} + log({bufferConcentration.base.toFixed(3)}/{bufferConcentration.acid.toFixed(3)})</div>
                        <div>pH = {selectedBufferData.pKa} + log({(bufferConcentration.base/bufferConcentration.acid).toFixed(3)})</div>
                        <div>pH = {selectedBufferData.pKa} + {Math.log10(bufferConcentration.base/bufferConcentration.acid).toFixed(3)}</div>
                        <div className="text-cyan-300 font-bold">pH = {currentPH.toFixed(2)}</div>
                      </div>
                    </div>

                    <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-3">
                        {getText({ zh: '缓冲容量分析', en: 'Buffer Capacity Analysis' })}
                      </h4>
                      <div className="text-purple-200 text-sm space-y-2">
                        <div>
                          {getText({ zh: '添加的强酸：', en: 'Strong acid added: ' })}{addedAcid.toFixed(1)} mL
                        </div>
                        <div>
                          {getText({ zh: '添加的强碱：', en: 'Strong base added: ' })}{addedBase.toFixed(1)} mL
                        </div>
                        <div>
                          {getText({ zh: 'pH变化幅度：', en: 'pH change range: ' })}
                          {phHistory.length > 1 ? 
                            `${Math.min(...phHistory.map(h => h.ph)).toFixed(2)} - ${Math.max(...phHistory.map(h => h.ph)).toFixed(2)}` :
                            'N/A'
                          }
                        </div>
                        <div className="text-purple-300 font-semibold">
                          {getText({ zh: '缓冲效果：优秀', en: 'Buffer Performance: Excellent' })}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={resetExperiment}
                        className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        {getText({ zh: '重新实验', en: 'New Experiment' })}
                      </button>
                      <button
                        onClick={() => setGamePhase('testing')}
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        {getText({ zh: '继续调节', en: 'Continue Adjusting' })}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {showCalculations && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3">
                    {getText({ zh: '缓冲溶液理论', en: 'Buffer Solution Theory' })}
                  </h4>
                  
                  <div className="space-y-4 text-sm">
                    <div className="bg-blue-500/20 border border-blue-400/30 rounded p-3">
                      <h5 className="text-blue-300 font-semibold mb-2">Henderson-Hasselbalch方程</h5>
                      <div className="font-mono text-blue-200">
                        pH = pKa + log([A⁻]/[HA])
                      </div>
                    </div>

                    <div className="bg-green-500/20 border border-green-400/30 rounded p-3">
                      <h5 className="text-green-300 font-semibold mb-2">
                        {getText({ zh: '缓冲范围', en: 'Buffer Range' })}
                      </h5>
                      <div className="text-green-200">
                        pH = pKa ± 1
                      </div>
                    </div>

                    <div className="bg-yellow-500/20 border border-yellow-400/30 rounded p-3">
                      <h5 className="text-yellow-300 font-semibold mb-2">
                        {getText({ zh: '最佳缓冲比', en: 'Optimal Buffer Ratio' })}
                      </h5>
                      <div className="text-yellow-200">
                        [A⁻]/[HA] = 0.1 - 10
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedBufferData && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3">
                    {getText({ zh: '缓冲系统信息', en: 'Buffer System Info' })}
                  </h4>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-300">
                        {getText({ zh: '系统名称：', en: 'System: ' })}
                      </span>
                      <span className="text-white">{getText(selectedBufferData.name)}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300">pKa: </span>
                      <span className="text-cyan-300 font-bold">{selectedBufferData.pKa}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-300">
                        {getText({ zh: '有效范围：', en: 'Effective Range: ' })}
                      </span>
                      <span className="text-green-300">
                        {selectedBufferData.effectiveRange[0]} - {selectedBufferData.effectiveRange[1]}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/20">
                      <div className="text-red-300">
                        {getText({ zh: '弱酸：', en: 'Weak Acid: ' })}{selectedBufferData.weakAcid}
                      </div>
                      <div className="text-blue-300">
                        {getText({ zh: '共轭碱：', en: 'Conjugate Base: ' })}{selectedBufferData.conjugateBase}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">
                  {getText({ zh: '实验技巧', en: 'Experimental Tips' })}
                </h4>
                
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{getText({ zh: '选择pKa接近目标pH的缓冲系统', en: 'Choose buffer system with pKa close to target pH' })}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{getText({ zh: '少量多次添加试剂以精确控制', en: 'Add reagents in small increments for precise control' })}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{getText({ zh: '观察缓冲容量的抗酸碱能力', en: 'Observe buffer capacity against acids and bases' })}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    <span>{getText({ zh: '使用Henderson-Hasselbalch方程验证结果', en: 'Use Henderson-Hasselbalch equation to verify results' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // MORE COMPLEX Chiral Challenge Game
  const ChiralChallengeGame: React.FC = () => {
    const [level, setLevel] = useState(0);
    const [rotation, setRotation] = useState({ a: 0, b: 0 });
    const [feedback, setFeedback] = useState<{type: 'correct' | 'incorrect', message: string} | null>(null);
    const [score, setScore] = useState(0);
    const [selectedCenters, setSelectedCenters] = useState<number[]>([]);

    const levels = [
        { type: 'identify_chiral', molecule: { name: 'Alanine', svg: 'alanine', isChiral: true, centers: [1] }, question: {zh: '这个分子是手性还是非手性？', en: 'Is this molecule Chiral or Achiral?'} },
        { type: 'find_centers', molecule: { name: '2,3-dihydroxybutanal', svg: 'dihydroxybutanal', isChiral: true, centers: [1, 2] }, question: {zh: '点击标记所有的手性中心。', en: 'Click to mark all chiral centers.'} },
        { type: 'compare', molecules: [{ name: 'R-Limonene', svg: 'r-limonene' }, { name: 'S-Limonene', svg: 's-limonene' }], relationship: 'enantiomers', question: {zh: '这两个分子是什么关系？', en: 'What is the relationship between these two molecules?'} },
        { type: 'identify_chiral', molecule: { name: 'Meso-tartaric acid', svg: 'meso-tartaric', isChiral: false, centers: [1, 2] }, question: {zh: '这个分子是手性还是非手性？', en: 'Is this molecule Chiral or Achiral?'} },
    ];

    const currentLevelData = levels[level];

    const MoleculeSVG = ({ name, rotation, onClick }: { name: string, rotation: number, onClick?: (index: number) => void }) => {
        const svgs: {[key: string]: React.ReactNode} = {
            'alanine': (
                <g>
                    <line x1="125" y1="100" x2="85" y2="120" stroke="white" strokeWidth="3" />
                    <line x1="125" y1="100" x2="165" y2="120" stroke="white" strokeWidth="3" />
                    <path d="M 125 100 L 125 60" stroke="white" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 125 100 L 145 90 L 155 80" fill="none" stroke="white" strokeWidth="3" />
                    <circle cx="125" cy="100" r="8" fill="orange" onClick={() => onClick && onClick(1)} className="cursor-pointer" />
                    <text x="75" y="140" fill="white">COOH</text>
                    <text x="155" y="140" fill="white">NH₂</text>
                    <text x="130" y="60" fill="white">CH₃</text>
                    <text x="160" y="80" fill="white">H</text>
                </g>
            ),
            'dihydroxybutanal': (
                <g>
                    <line x1="125" y1="100" x2="85" y2="120" stroke="white" strokeWidth="3" />
                    <line x1="125" y1="100" x2="125" y2="60" stroke="white" strokeWidth="3" />
                    <line x1="85" y1="120" x2="45" y2="100" stroke="white" strokeWidth="3" />
                    <path d="M 125 100 L 145 90 L 155 80" fill="none" stroke="white" strokeWidth="3" />
                    <path d="M 85 120 L 105 130 L 95 140" fill="white" stroke="white" strokeWidth="3" strokeLinejoin='round' />
                    <circle cx="125" cy="100" r="8" fill="orange" onClick={() => onClick && onClick(1)} className="cursor-pointer" />
                    <circle cx="85" cy="120" r="8" fill="orange" onClick={() => onClick && onClick(2)} className="cursor-pointer" />
                    <text x="130" y="55" fill="white">CHO</text>
                    <text x="25" y="100" fill="white">CH₃</text>
                    <text x="160" y="80" fill="white">OH</text>
                    <text x="100" y="150" fill="white">OH</text>
                </g>
            ),
            'r-limonene': <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/R-Limonene-2D-skeletal.svg/200px-R-Limonene-2D-skeletal.svg.png" height="150" width="150" x="50" y="25" />,
            's-limonene': <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/S-Limonene-2D-skeletal.svg/200px-S-Limonene-2D-skeletal.svg.png" height="150" width="150" x="50" y="25" />,
            'meso-tartaric': <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Meso-tartaric_acid.svg/200px-Meso-tartaric_acid.svg.png" height="150" width="150" x="50" y="25" />,
        };
        return <g style={{ transform: `rotateY(${rotation}deg)` }}>{svgs[name]}</g>;
    }

    const nextLevel = () => {
        if (level < levels.length - 1) {
            setLevel(l => l + 1);
            setFeedback(null);
            setSelectedCenters([]);
        } else {
            setFeedback({type: 'correct', message: getText({zh: '恭喜！你已完成所有挑战！', en: 'Congratulations! You have completed all challenges!'})});
        }
    }

    const handleAnswer = (answer: any) => {
        let isCorrect = false;
        if (currentLevelData.type === 'identify_chiral') {
            isCorrect = answer === (currentLevelData.molecule as any).isChiral;
        } else if (currentLevelData.type === 'find_centers') {
            const correctCenters = (currentLevelData.molecule as any).centers;
            isCorrect = selectedCenters.length === correctCenters.length && selectedCenters.every(c => correctCenters.includes(c));
        } else if (currentLevelData.type === 'compare') {
            isCorrect = answer === (currentLevelData as any).relationship;
        }

        if (isCorrect) {
            setFeedback({type: 'correct', message: getText({zh: '正确！', en: 'Correct!'})});
            setScore(s => s + 100);
            setTimeout(nextLevel, 1500);
        } else {
            setFeedback({type: 'incorrect', message: getText({zh: '不正确，再试一次。', en: 'Incorrect, try again.'})});
            setTimeout(() => setFeedback(null), 2000);
        }
    };
    
    const handleCenterClick = (index: number) => {
        if (currentLevelData.type !== 'find_centers') return;
        const newSelection = selectedCenters.includes(index)
            ? selectedCenters.filter(i => i !== index)
            : [...selectedCenters, index];
        setSelectedCenters(newSelection);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-rose-800 p-6 text-white">
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-2">{getText({zh: '手性挑战', en: 'Chiral Challenge'})}</h2>
                <p className="text-center text-purple-200 mb-2">{getText({zh: `关卡 ${level + 1}/${levels.length}`, en: `Level ${level + 1}/${levels.length}`})}</p>
                <p className="text-center text-lg font-semibold mb-6">{getText(currentLevelData.question)}</p>

                <div className={`flex justify-center items-center mb-8 gap-8`} style={{ perspective: '1000px' }}>
                    {currentLevelData.type === 'compare' ? (
                        <>
                            <svg width="300" height="200" viewBox="0 0 300 200"><MoleculeSVG name={currentLevelData.molecules[0].svg} rotation={rotation.a} /></svg>
                            <svg width="300" height="200" viewBox="0 0 300 200"><MoleculeSVG name={currentLevelData.molecules[1].svg} rotation={rotation.b} /></svg>
                        </>
                    ) : (
                        <svg width="300" height="200" viewBox="0 0 300 200">
                           <MoleculeSVG name={(currentLevelData.molecule as any).svg} rotation={rotation.a} onClick={handleCenterClick} />
                           {(currentLevelData.molecule as any).centers.map((c: any, i: number) => selectedCenters.includes(c) && <circle key={i} cx={c === 1 ? 125 : 85} cy={c === 1 ? 100 : 120} r="12" fill="none" stroke="cyan" strokeWidth="2" />)}
                        </svg>
                    )}
                </div>

                <div className="flex justify-center gap-4 mb-8">
                     <button onClick={() => setRotation(r => ({...r, a: r.a - 20}))} className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">{getText({zh: '旋转 A', en: 'Rotate A'})}</button>
                     {currentLevelData.type === 'compare' && <button onClick={() => setRotation(r => ({...r, b: r.b - 20}))} className="p-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition">{getText({zh: '旋转 B', en: 'Rotate B'})}</button>}
                </div>

                <div className="text-center mb-6">
                    {currentLevelData.type === 'identify_chiral' && (
                        <div className="flex justify-center gap-6">
                            <button onClick={() => handleAnswer(true)} className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition">{getText({zh: '手性', en: 'Chiral'})}</button>
                            <button onClick={() => handleAnswer(false)} className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold transition">{getText({zh: '非手性', en: 'Achiral'})}</button>
                        </div>
                    )}
                    {currentLevelData.type === 'find_centers' && (
                        <button onClick={() => handleAnswer(null)} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition">{getText({zh: '确认手性中心', en: 'Confirm Centers'})}</button>
                    )}
                    {currentLevelData.type === 'compare' && (
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => handleAnswer('enantiomers')} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition">{getText({zh: '对映异构体', en: 'Enantiomers'})}</button>
                            <button onClick={() => handleAnswer('diastereomers')} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition">{getText({zh: '非对映异构体', en: 'Diastereomers'})}</button>
                            <button onClick={() => handleAnswer('identical')} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition">{getText({zh: '相同分子', en: 'Identical'})}</button>
                            <button onClick={() => handleAnswer('constitutional')} className="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg transition">{getText({zh: '构造异构体', en: 'Constitutional Isomers'})}</button>
                        </div>
                    )}
                </div>

                {feedback && (
                    <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${feedback.type === 'correct' ? 'bg-green-500/30 text-green-200' : 'bg-red-500/30 text-red-200'}`}>
                        {feedback.message}
                    </div>
                )}
            </div>
        </div>
    );
  };

  // MORE COMPLEX Synthesis Strategist Game
  const SynthesisStrategistGame: React.FC = () => {
    const [path, setPath] = useState<string[]>([]);
    const [feedback, setFeedback] = useState<{type: 'success' | 'error', message: string} | null>(null);
    const [puzzle, setPuzzle] = useState({start: '', target: ''});

    const molecules = {
        'ethene': { name: 'Ethene', functional_group: 'alkene' },
        'ethanol': { name: 'Ethanol', functional_group: 'primary_alcohol' },
        'ethanal': { name: 'Ethanal', functional_group: 'aldehyde' },
        'ethanoic_acid': { name: 'Ethanoic Acid', functional_group: 'carboxylic_acid' },
        'chloroethane': { name: 'Chloroethane', functional_group: 'haloalkane' },
        'ethylamine': { name: 'Ethylamine', functional_group: 'amine' },
        'acetonitrile': { name: 'Acetonitrile', functional_group: 'nitrile' },
        'propanoic_acid': { name: 'Propanoic Acid', functional_group: 'carboxylic_acid' },
    };

    const reactions = [
        { id: 'hydration', name: {zh: '水合', en: 'Hydration'}, reagent: {zh: 'H₃PO₄/H₂O, heat', en: 'H₃PO₄/H₂O, heat'}, from_fg: 'alkene', to: 'ethanol' },
        { id: 'mild_oxidation', name: {zh: '温和氧化', en: 'Mild Oxidation'}, reagent: {zh: 'PCC, CH₂Cl₂', en: 'PCC, CH₂Cl₂'}, from_fg: 'primary_alcohol', to: 'ethanal' },
        { id: 'strong_oxidation', name: {zh: '强氧化', en: 'Strong Oxidation'}, reagent: {zh: 'KMnO₄/H⁺, reflux', en: 'KMnO₄/H⁺, reflux'}, from_fg: 'primary_alcohol', to: 'ethanoic_acid' },
        { id: 'nucleophilic_sub_cl', name: {zh: '亲核取代 (Cl)', en: 'Nucleophilic Sub (Cl)'}, reagent: {zh: 'SOCl₂', en: 'SOCl₂'}, from_fg: 'primary_alcohol', to: 'chloroethane' },
        { id: 'nucleophilic_sub_nh3', name: {zh: '亲核取代 (NH₂)', en: 'Nucleophilic Sub (NH₂)'}, reagent: {zh: 'xs NH₃, ethanol', en: 'xs NH₃, ethanol'}, from_fg: 'haloalkane', to: 'ethylamine' },
        { id: 'nucleophilic_sub_cn', name: {zh: '亲核取代 (CN)', en: 'Nucleophilic Sub (CN)'}, reagent: {zh: 'NaCN, ethanol/water', en: 'NaCN, ethanol/water'}, from_fg: 'haloalkane', to: 'acetonitrile' },
        { id: 'nitrile_hydrolysis', name: {zh: '腈水解', en: 'Nitrile Hydrolysis'}, reagent: {zh: 'H₃O⁺, heat', en: 'H₃O⁺, heat'}, from_fg: 'nitrile', to: 'propanoic_acid' },
        // Distractors
        { id: 'distractor1', name: {zh: '还原', en: 'Reduction'}, reagent: {zh: 'LiAlH₄', en: 'LiAlH₄'}, from_fg: 'alkene', to: 'ethene' },
        { id: 'distractor2', name: {zh: '酯化', en: 'Esterification'}, reagent: {zh: 'CH₃OH/H⁺', en: 'CH₃OH/H⁺'}, from_fg: 'aldehyde', to: 'ethanal' },
    ];
    
    const puzzles = [
        { start: 'ethene', target: 'ethanoic_acid' },
        { start: 'ethene', target: 'propanoic_acid' },
    ];

    useEffect(() => {
        startNewPuzzle();
    }, []);

    const startNewPuzzle = () => {
        const newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
        setPuzzle(newPuzzle);
        setPath([newPuzzle.start]);
        setFeedback(null);
    };

    const handleReaction = (reactionId: string) => {
        const reaction = reactions.find(r => r.id === reactionId);
        const currentMoleculeKey = path[path.length - 1];
        const currentMolecule = molecules[currentMoleculeKey as keyof typeof molecules];

        if (reaction && reaction.from_fg === currentMolecule.functional_group) {
            const nextMoleculeKey = reaction.to;
            setPath([...path, nextMoleculeKey]);
            setFeedback(null);
            if (nextMoleculeKey === puzzle.target) {
                 setFeedback({type: 'success', message: getText({zh: '成功！你合成了目标产物！', en: 'Success! You synthesized the target molecule!'})});
            }
        } else {
            setFeedback({type: 'error', message: getText({zh: '错误的反应或起始物。', en: 'Wrong reaction or starting material.'})});
        }
    };

    const currentMoleculeKey = path[path.length-1];
    const availableReactions = reactions.filter(r => r.from_fg === molecules[currentMoleculeKey as keyof typeof molecules]?.functional_group);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-800 p-6 text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">{getText({zh: '合成策略师', en: 'Synthesis Strategist'})}</h2>
                <p className="text-center text-red-200 mb-8">{getText({zh: `目标: 从 ${molecules[puzzle.start as keyof typeof molecules]?.name} 合成 ${molecules[puzzle.target as keyof typeof molecules]?.name}`, en: `Task: Synthesize ${molecules[puzzle.target as keyof typeof molecules]?.name} from ${molecules[puzzle.start as keyof typeof molecules]?.name}`})}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4">{getText({zh: '可用反应', en: 'Available Reactions'})}</h3>
                        <div className="space-y-3">
                            {availableReactions.map(r => (
                                <button key={r.id} onClick={() => handleReaction(r.id)} className="w-full text-left p-3 bg-red-800/50 hover:bg-red-700/50 rounded-lg transition">
                                    <p className="font-semibold">{getText(r.name)}</p>
                                    <p className="text-sm text-red-200">{getText(r.reagent)}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">{getText({zh: '你的合成路径', en: 'Your Pathway'})}</h3>
                            <button onClick={startNewPuzzle} className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition">{getText({zh: '新谜题', en: 'New Puzzle'})}</button>
                        </div>
                        <div className="flex items-center flex-wrap gap-4 p-4 bg-black/20 rounded-lg min-h-[100px]">
                            {path.map((key, index) => (
                                <React.Fragment key={index}>
                                    <div className="p-3 bg-blue-600 rounded-lg shadow-lg">
                                        {molecules[key as keyof typeof molecules].name}
                                    </div>
                                    {index < path.length - 1 && <div className="text-2xl font-bold text-yellow-400">→</div>}
                                </React.Fragment>
                            ))}
                        </div>
                        {feedback && (
                            <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${feedback.type === 'success' ? 'bg-green-500/30 text-green-200' : 'bg-red-500/30 text-yellow-200'}`}>
                                {feedback.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  };

  // MORE COMPLEX Kinetics Lab Game
  const KineticsLabGame: React.FC = () => {
    const [experiments, setExperiments] = useState<{concA: number, concB: number, rate: number}[]>([]);
    const [trueOrders, setTrueOrders] = useState({ orderA: 1, orderB: 2, k: 2.0 });
    const [inputs, setInputs] = useState({ concA: '0.1', concB: '0.1' });
    const [answers, setAnswers] = useState({ orderA: '', orderB: '', k: '' });
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        startNewProblem();
    }, []);

    const startNewProblem = () => {
        setTrueOrders({
            orderA: [0, 1, 2][Math.floor(Math.random() * 3)],
            orderB: [0, 1, 2][Math.floor(Math.random() * 3)],
            k: parseFloat((Math.random() * 5 + 0.5).toFixed(2)),
        });
        setExperiments([]);
        setAnswers({ orderA: '', orderB: '', k: '' });
        setFeedback(null);
    };

    const handleRunExperiment = () => {
        const concA = parseFloat(inputs.concA);
        const concB = parseFloat(inputs.concB);
        if (isNaN(concA) || isNaN(concB) || concA <= 0 || concB <= 0) {
            setFeedback(getText({zh: '请输入有效的正浓度值。', en: 'Please enter valid positive concentrations.'}));
            return;
        }
        const rate = trueOrders.k * Math.pow(concA, trueOrders.orderA) * Math.pow(concB, trueOrders.orderB);
        setExperiments([...experiments, { concA, concB, rate }]);
        setFeedback(null);
    };

    const handleCheckAnswers = () => {
        const orderA = parseInt(answers.orderA);
        const orderB = parseInt(answers.orderB);
        const k = parseFloat(answers.k);

        const isOrderACorrect = orderA === trueOrders.orderA;
        const isOrderBCorrect = orderB === trueOrders.orderB;
        const isKCorrect = Math.abs((k - trueOrders.k) / trueOrders.k) < 0.1; // 10% tolerance for k

        if (isOrderACorrect && isOrderBCorrect && isKCorrect) {
            setFeedback(getText({zh: '完全正确！你成功确定了速率方程！', en: 'Perfect! You&rsquo;ve determined the rate law!'}));
        } else {
            let errorMsg = getText({zh: '答案不完全正确。', en: 'Not quite right.'});
            if (!isOrderACorrect) errorMsg += getText({zh: ' A的级数错误。', en: ' Order for A is incorrect.'});
            if (!isOrderBCorrect) errorMsg += getText({zh: ' B的级数错误。', en: ' Order for B is incorrect.'});
            if (!isKCorrect) errorMsg += getText({zh: ' k值不准确。', en: ' The value for k is not accurate.'});
            setFeedback(errorMsg);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-800 p-6 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">{getText({zh: '动力学实验室', en: 'Kinetics Lab'})}</h2>
                <p className="text-center text-indigo-200 mb-8">{getText({zh: '通过实验确定一个未知反应的速率方程。', en: 'Determine the rate law for an unknown reaction by experiment.'})}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4">{getText({zh: '实验数据', en: 'Experimental Data'})}</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-2">{getText({zh: '实验', en: 'Exp.'})}</th>
                                    <th className="p-2">[A] (M)</th>
                                    <th className="p-2">[B] (M)</th>
                                    <th className="p-2">{getText({zh: '初始速率', en: 'Initial Rate'})} (M/s)</th>
                                </tr>
                            </thead>
                           <tbody>
                                {experiments.map((exp, i) => (
                                    <tr key={i} className="border-b border-white/10">
                                        <td className="p-2">{i + 1}</td>
                                        <td className="p-2">{exp.concA.toFixed(3)}</td>
                                        <td className="p-2">{exp.concB.toFixed(3)}</td>
                                        <td className="p-2">{exp.rate.toExponential(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-6 p-4 bg-black/20 rounded-lg">
                            <h4 className="font-semibold mb-3">{getText({zh: '运行新实验', en: 'Run New Experiment'})}</h4>
                            <div className="flex items-center gap-4">
                                <input type="number" step="0.1" value={inputs.concA} onChange={e => setInputs({...inputs, concA: e.target.value})} placeholder="[A]" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"/>
                                <input type="number" step="0.1" value={inputs.concB} onChange={e => setInputs({...inputs, concB: e.target.value})} placeholder="[B]" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"/>
                                <button onClick={handleRunExperiment} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">{getText({zh: '运行', en: 'Run'})}</button>
                            </div>
                        </div>
                         <button onClick={startNewProblem} className="w-full mt-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition">{getText({zh: '新问题', en: 'New Problem'})}</button>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4">{getText({zh: '分析与提交', en: 'Analysis & Submission'})}</h3>
                        <p className="mb-4">{getText({zh: '根据数据推导速率方程: rate = k[A]ˣ[B]ʸ', en: 'From the data, deduce the rate law: rate = k[A]ˣ[B]ʸ'})}</p>
                        <div className="space-y-4">
                           <div>
                                <label className="block mb-1 font-semibold">{getText({zh: 'A的反应级数 (x)', en: 'Order for A (x)'})}</label>
                                <input type="number" value={answers.orderA} onChange={e => setAnswers({...answers, orderA: e.target.value})} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"/>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">{getText({zh: 'B的反应级数 (y)', en: 'Order for B (y)'})}</label>
                                <input type="number" value={answers.orderB} onChange={e => setAnswers({...answers, orderB: e.target.value})} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"/>
                            </div>
                            <div>
                                <label className="block mb-1 font-semibold">{getText({zh: '速率常数 (k)', en: 'Rate Constant (k)'})}</label>
                                <input type="number" value={answers.k} onChange={e => setAnswers({...answers, k: e.target.value})} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"/>
                            </div>
                        </div>
                        <button onClick={handleCheckAnswers} className="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition">{getText({zh: '检查答案', en: 'Check Answers'})}</button>
                        <button onClick={() => setShowHint(!showHint)} className="w-full mt-2 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition">{getText({zh: '提示', en: 'Hint'})}</button>
                        {showHint && <div className="mt-4 p-3 bg-yellow-500/20 text-yellow-200 rounded-lg text-sm">{getText({zh: '要确定A的级数，进行两个实验，其中[B]保持不变，而[A]发生变化。比较速率的变化。对B也这样做。', en: 'To find the order of A, run two experiments where [B] is constant but [A] changes. Compare the change in rate. Do the same for B.'})}</div>}
                        {feedback && (
                            <div className={`mt-6 p-4 rounded-lg text-center font-semibold ${feedback.includes('Perfect') || feedback.includes('完全正确') ? 'bg-green-500/30 text-green-200' : 'bg-red-500/30 text-red-200'}`}>
                                {feedback}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  };


  // Main component render
  if (currentGame) {
    return (
      <div>
        <div className="bg-black/20 backdrop-blur-md border-b border-white/20 p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setCurrentGame(null)}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              {getText(currentLangText.backToMenu)}
            </button>
            
            <button
              onClick={() => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh')}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {currentGame === 'electrochemical' && <ElectrochemicalGame />}
        {currentGame === 'ligand-swap' && <LigandSwapGame />}
        {currentGame === 'ph-balancer' && <PHBalancerGame />}
        {currentGame === 'chiral-challenge' && <ChiralChallengeGame />}
        {currentGame === 'synthesis-strategist' && <SynthesisStrategistGame />}
        {currentGame === 'kinetics-lab' && <KineticsLabGame />}
      </div>
    );
  }

  // Main menu
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Atom className="w-12 h-12 text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
            <h1 className="text-5xl font-bold text-white">
              {getText(currentLangText.title)}
            </h1>
            <button
              onClick={() => setCurrentLang(currentLang === 'zh' ? 'en' : 'zh')}
              className="ml-4 p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-6 h-6 text-white" />
            </button>
          </div>
          <p className="text-xl text-cyan-100 mb-8">
            {getText(currentLangText.subtitle)}
          </p>
          
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">
                {getText(currentLangText.progress)}: {completedGames.size}/{games.length}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">
                {getText(currentLangText.games)}: {games.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <article 
              key={game.id}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 
                         hover:border-white/40 transition-all duration-300 hover:scale-105
                         hover:shadow-2xl overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${game.color} p-6 relative`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    {getIcon(game.icon)}
                  </div>
                  {completedGames.has(game.id) && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {getText(currentLangText.completed)}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {getText(game.title)}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-sm">{getText(currentLangText.difficulty)}:</span>
                  <div className="flex">{getDifficultyStars(game.difficulty)}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">
                    {getText(currentLangText.concept)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {getText(game.concept)}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-green-300 font-semibold mb-2">
                    {getText(currentLangText.gameplay)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {getText(game.gameplay)}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-purple-300 font-semibold mb-2">
                    {getText(currentLangText.objective)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {getText(game.objective)}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentGame(game.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300
                             bg-gradient-to-r ${game.color} text-white
                             hover:shadow-lg hover:scale-105 active:scale-95
                             group-hover:shadow-xl`}
                  aria-label={`Play ${getText(game.title)}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    {getText(currentLangText.playGame)}
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ChemistryGameSuite;
