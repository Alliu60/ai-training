"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Zap, Atom, FlaskConical, RotateCcw, Network, BarChart3, Play, Globe, Award, Target, Home, CheckCircle, XCircle, Beaker, ArrowLeft, Plus, Minus, RotateCw, Calculator, Eye, Settings, Trash2, Save } from 'lucide-react';

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
      description: { zh: '3D拼图游戏。显示分子并可在3D空间中旋转，玩家必须识别分子是否具有手性并标记手性中心。高级关卡要求判断第二个分子是否为对映异构体。', en: 'A 3D puzzle game. A molecule is displayed and can be rotated in 3D space. Players must identify if the molecule is chiral or achiral and mark chiral centers. Advanced levels ask to determine if a second molecule is an enantiomer.' },
      objective: { zh: '识别手性中心并理解对映异构体作为不可重叠镜像的概念', en: 'To identify chiral centers and understand enantiomers as non-superimposable mirror images' },
      difficulty: 5,
      icon: 'rotate',
      color: 'from-purple-500 to-pink-600',
      gameplay: { zh: '3D分子操作，手性中心标记，对映体识别', en: '3D molecule manipulation, chiral center marking, enantiomer identification' }
    },
    {
      id: 'synthesis-strategist',
      title: { zh: '合成策略师', en: 'Synthesis Strategist' },
      concept: { zh: '多步有机合成', en: 'Multi-step organic synthesis' },
      description: { zh: '路径规划拼图游戏。给定起始分子和目标分子，玩家必须从反应库中选择正确的反应序列，为每步选择合适的试剂和条件。', en: 'A route-planning puzzle game. Players are given a starting molecule and target molecule. They must select the correct reaction sequence from a library, choosing right reagents and conditions for each step.' },
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
      description: { zh: '虚拟实验室模拟，玩家设计实验确定反应的速率方程。选择一系列实验的初始反应物浓度，测量初始速率，然后用数据推导各反应物的反应级数并计算速率常数。', en: 'A virtual lab simulation where players design experiments to determine reaction rate equations. They choose initial reactant concentrations for experiments, measure initial rates, then use data to deduce reaction orders and calculate rate constants.' },
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
      case 'rotate': return <RotateCcw {...iconProps} />;
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
        
        // Simulate measurement
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
      
      // Check if correct
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
          {/* Progress Indicator */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">
                {currentLang === 'zh' ? '电化学电池设计师' : 'Electrochemical Cell Designer'}
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowDataTable(!showDataTable)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Calculator className="w-4 h-4 inline mr-2" />
                  {currentLang === 'zh' ? '数据表' : 'Data Table'}
                </button>
                <div className="text-white font-semibold">
                  {currentLang === 'zh' ? '得分' : 'Score'}: {score}
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
              {currentStep === 1 && (currentLang === 'zh' ? '选择电极' : 'Select Electrodes')}
              {currentStep === 2 && (currentLang === 'zh' ? '组装电池' : 'Assemble Cell')}
              {currentStep === 3 && (currentLang === 'zh' ? '测量与预测' : 'Measure & Predict')}
              {currentStep === 4 && (currentLang === 'zh' ? '计算验证' : 'Calculate & Verify')}
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Game Area */}
            <div className="xl:col-span-2">
              {gameStep === 'setup' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {currentLang === 'zh' ? '步骤1：选择半电池电极' : 'Step 1: Select Half-Cell Electrodes'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        {currentLang === 'zh' ? '阳极 (氧化)' : 'Anode (Oxidation)'}
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
                        {currentLang === 'zh' ? '阴极 (还原)' : 'Cathode (Reduction)'}
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
                    {currentLang === 'zh' ? '进入组装步骤' : 'Proceed to Assembly'}
                  </button>
                </div>
              )}

              {gameStep === 'assembly' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {currentLang === 'zh' ? '步骤2：组装电化学电池' : 'Step 2: Assemble Electrochemical Cell'}
                  </h3>

                  {/* Visual Cell Assembly */}
                  <div className="bg-black/20 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-center h-40">
                      <div className="grid grid-cols-5 gap-4 items-center w-full max-w-2xl">
                        {/* Anode Beaker */}
                        <div className="text-center">
                          <div className="w-20 h-24 bg-red-600/50 border-2 border-red-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <div className="text-white font-bold text-sm">
                              {electrodeData.find(e => e.id === selectedAnode)?.element}
                            </div>
                          </div>
                          <div className="text-red-300 text-xs">Anode</div>
                        </div>

                        {/* Wire */}
                        <div className="flex justify-center">
                          <div className={`w-8 h-1 transition-colors ${
                            assemblyComponents.wires ? 'bg-yellow-400' : 'bg-gray-600'
                          }`} />
                        </div>

                        {/* Voltmeter */}
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

                        {/* Wire */}
                        <div className="flex justify-center">
                          <div className={`w-8 h-1 transition-colors ${
                            assemblyComponents.wires ? 'bg-yellow-400' : 'bg-gray-600'
                          }`} />
                        </div>

                        {/* Cathode Beaker */}
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

                    {/* Salt Bridge */}
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

                  {/* Assembly Controls */}
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
                    {currentLang === 'zh' ? '进入测量步骤' : 'Proceed to Measurement'}
                  </button>
                </div>
              )}

              {gameStep === 'measurement' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {currentLang === 'zh' ? '步骤3：测量电压并预测电子流向' : 'Step 3: Measure Voltage & Predict Electron Flow'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Voltage Reading */}
                    <div className="text-center">
                      <h4 className="text-white font-semibold mb-4">
                        {currentLang === 'zh' ? '电压表读数' : 'Voltmeter Reading'}
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

                    {/* Electron Flow Prediction */}
                    <div>
                      <h4 className="text-white font-semibold mb-4">
                        {currentLang === 'zh' ? '预测电子流向' : 'Predict Electron Flow'}
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
                          {currentLang === 'zh' ? '阳极 → 阴极' : 'Anode → Cathode'}
                        </button>
                        <button
                          onClick={() => handleElectronFlowPrediction('cathode-to-anode')}
                          className={`w-full p-3 rounded-lg border transition-colors ${
                            electronFlow === 'cathode-to-anode'
                              ? 'border-yellow-400 bg-yellow-500/20 text-yellow-200'
                              : 'border-white/30 bg-white/10 text-white hover:border-white/50'
                          }`}
                        >
                          {currentLang === 'zh' ? '阴极 → 阳极' : 'Cathode → Anode'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {gameStep === 'calculation' && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {currentLang === 'zh' ? '步骤4：计算验证' : 'Step 4: Calculation & Verification'}
                  </h3>

                  <div className="space-y-6">
                    {/* Calculation Steps */}
                    <div className="bg-black/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-3">
                        {currentLang === 'zh' ? '计算步骤' : 'Calculation Steps'}
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
                                ? (currentLang === 'zh' ? '反应自发进行 (ΔG < 0)' : 'Reaction is spontaneous (ΔG < 0)')
                                : (currentLang === 'zh' ? '反应不自发 (ΔG > 0)' : 'Reaction is non-spontaneous (ΔG > 0)')
                              }
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Success Message */}
                    <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <div className="text-green-200 font-semibold">
                        {currentLang === 'zh' ? '电池设计完成！' : 'Cell Design Complete!'}
                      </div>
                      <div className="text-green-300 text-sm mt-1">
                        {currentLang === 'zh' ? `获得 ${score} 分` : `Earned ${score} points`}
                      </div>
                    </div>

                    <button
                      onClick={resetGame}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      {currentLang === 'zh' ? '重新开始' : 'Start New Cell'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Data Table */}
              {showDataTable && (
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3">
                    {currentLang === 'zh' ? '标准电极电位表' : 'Standard Electrode Potentials'}
                  </h4>
                  <div className="max-h-60 overflow-y-auto">
                    <table className="w-full text-white text-sm">
                      <thead>
                        <tr className="border-b border-white/30">
                          <th className="text-left p-1">
                            {currentLang === 'zh' ? '电极' : 'Electrode'}
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

              {/* Instructions */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">
                  {currentLang === 'zh' ? '实验步骤' : 'Experimental Steps'}
                </h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className={`p-2 rounded ${currentStep >= 1 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    1. {currentLang === 'zh' ? '选择两个不同的半电池电极' : 'Select two different half-cell electrodes'}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 2 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    2. {currentLang === 'zh' ? '组装盐桥、电压表和导线' : 'Assemble salt bridge, voltmeter, and wires'}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 3 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    3. {currentLang === 'zh' ? '测量电压并预测电子流向' : 'Measure voltage and predict electron flow'}
                  </div>
                  <div className={`p-2 rounded ${currentStep >= 4 ? 'bg-green-500/20' : 'bg-gray-600/20'}`}>
                    4. {currentLang === 'zh' ? '验证计算结果' : 'Verify calculation results'}
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
    const [availableLigands, setAvailableLigands] = useState<string[]>(['nh3', 'cl', 'oh']);
    const [selectedNewComplex, setSelectedNewComplex] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
    const [predictedColor, setPredictedColor] = useState<string>('');

    const complexes = [
      { 
        id: 'cu-water', 
        formula: '[Cu(H₂O)₆]²⁺', 
        color: '#87CEEB', 
        name: { zh: '六水合铜(II)离子', en: 'Hexaaquacopper(II) ion' },
        description: { zh: '浅蓝色', en: 'Pale blue' }
      },
      { 
        id: 'cu-ammonia', 
        formula: '[Cu(NH₃)₄(H₂O)₂]²⁺', 
        color: '#0066CC', 
        name: { zh: '四氨合铜(II)离子', en: 'Tetraamminecopper(II) ion' },
        description: { zh: '深蓝色', en: 'Deep blue' }
      },
      { 
        id: 'cu-chloride', 
        formula: '[CuCl₄]²⁻', 
        color: '#228B22', 
        name: { zh: '四氯合铜(II)离子', en: 'Tetrachlorocopper(II) ion' },
        description: { zh: '黄绿色', en: 'Yellow-green' }
      },
      { 
        id: 'cu-hydroxide', 
        formula: '[Cu(OH)₄]²⁻', 
        color: '#4169E1', 
        name: { zh: '四羟基合铜(II)离子', en: 'Tetrahydroxocopper(II) ion' },
        description: { zh: '深蓝色', en: 'Deep blue' }
      },
      { 
        id: 'fe-water', 
        formula: '[Fe(H₂O)₆]³⁺', 
        color: '#DDA0DD', 
        name: { zh: '六水合铁(III)离子', en: 'Hexaaquairon(III) ion' },
        description: { zh: '淡紫色', en: 'Pale violet' }
      },
      { 
        id: 'fe-thiocyanate', 
        formula: '[Fe(SCN)(H₂O)₅]²⁺', 
        color: '#8B0000', 
        name: { zh: '硫氰酸合铁(III)络离子', en: 'Iron(III) thiocyanate complex' },
        description: { zh: '血红色', en: 'Blood red' }
      }
    ];

    const ligands = [
      { 
        id: 'nh3', 
        formula: 'NH₃', 
        name: { zh: '氨', en: 'Ammonia' }, 
        color: '#10B981',
        strength: 'strong',
        denticity: 1
      },
      { 
        id: 'cl', 
        formula: 'Cl⁻', 
        name: { zh: '氯离子', en: 'Chloride' }, 
        color: '#F59E0B',
        strength: 'weak',
        denticity: 1
      },
      { 
        id: 'oh', 
        formula: 'OH⁻', 
        name: { zh: '氢氧根离子', en: 'Hydroxide' }, 
        color: '#8B5CF6',
        strength: 'strong',
        denticity: 1
      },
      { 
        id: 'scn', 
        formula: 'SCN⁻', 
        name: { zh: '硫氰酸根离子', en: 'Thiocyanate' }, 
        color: '#EF4444',
        strength: 'medium',
        denticity: 1
      }
    ];

    const colorOptions = [
      { id: 'pale-blue', name: { zh: '浅蓝色', en: 'Pale blue' }, color: '#87CEEB' },
      { id: 'deep-blue', name: { zh: '深蓝色', en: 'Deep blue' }, color: '#0066CC' },
      { id: 'yellow-green', name: { zh: '黄绿色', en: 'Yellow-green' }, color: '#228B22' },
      { id: 'blood-red', name: { zh: '血红色', en: 'Blood red' }, color: '#8B0000' },
      { id: 'pale-violet', name: { zh: '淡紫色', en: 'Pale violet' }, color: '#DDA0DD' }
    ];

    const levels = [
      {
        initial: 'cu-water',
        ligand: 'nh3',
        target: 'cu-ammonia',
        hint: { zh: '氨是强配体，会取代水分子', en: 'Ammonia is a strong ligand that displaces water' }
      },
      {
        initial: 'cu-water',
        ligand: 'cl',
        target: 'cu-chloride',
        hint: { zh: '高浓度氯离子可以取代水分子', en: 'High concentration chloride can displace water' }
      },
      {
        initial: 'fe-water',
        ligand: 'scn',
        target: 'fe-thiocyanate',
        hint: { zh: '硫氰酸根与铁(III)形成血红色络合物', en: 'Thiocyanate forms blood red complex with Fe(III)' }
      }
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
      
      // Check answers
      const targetComplex = complexes.find(c => c.id === currentLevelData.target);
      const correctColor = colorOptions.find(c => c.color === targetComplex?.color);
      
      if (selectedNewComplex === currentLevelData.target && colorId === correctColor?.id) {
        setScore(prev => prev + 200);
        setFeedback(currentLang === 'zh' ? '完全正确！' : 'Perfect!');
        setTimeout(() => {
          if (currentLevel < levels.length - 1) {
            setCurrentLevel(prev => prev + 1);
            resetLevel();
          }
        }, 2000);
      } else {
        setFeedback(currentLang === 'zh' ? '请重新检查答案' : 'Please check your answers');
      }
    };

    const resetLevel = (): void => {
      const newLevel = levels[currentLevel + 1] || levels[0];
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
                {currentLang === 'zh' ? '配体交换游戏' : 'Ligand Swap Game'}
              </h2>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  {currentLang === 'zh' ? '关卡' : 'Level'}: {currentLevel + 1}/{levels.length}
                </div>
                <div className="text-white">
                  {currentLang === 'zh' ? '得分' : 'Score'}: {score}
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">
                {currentLang === 'zh' ? '任务提示' : 'Mission Hint'}
              </h4>
              <p className="text-blue-200">{getText(currentLevelData.hint)}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Current Complex */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {currentLang === 'zh' ? '当前络合物' : 'Current Complex'}
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

              {/* Available Ligands */}
              <h4 className="text-white font-semibold mb-3">
                {currentLang === 'zh' ? '添加配体' : 'Add Ligand'}
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
                        <div>{currentLang === 'zh' ? '强度' : 'Strength'}: {ligand.strength}</div>
                        <div>{currentLang === 'zh' ? '齿数' : 'Denticity'}: {ligand.denticity}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complex Selection */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {currentLang === 'zh' ? '选择新络合物' : 'Select New Complex'}
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

            {/* Color Prediction */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {currentLang === 'zh' ? '预测颜色变化' : 'Predict Color Change'}
              </h3>

              {showColorPicker ? (
                <div className="space-y-3">
                  <p className="text-white text-center mb-4">
                    {currentLang === 'zh' ? '新络合物的颜色是什么？' : 'What color is the new complex?'}
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
                  <p>{currentLang === 'zh' ? '请先添加配体' : 'Please add a ligand first'}</p>
                </div>
              )}

              {/* Ligand Strength Chart */}
              <div className="mt-6 p-4 bg-black/20 rounded-lg">
                <h4 className="text-white font-semibold mb-3">
                  {currentLang === 'zh' ? '配体强度序列' : 'Ligand Strength Series'}
                </h4>
                <div className="text-sm text-gray-300">
                  <div className="font-mono">
                    I⁻ &lt; Br⁻ &lt; Cl⁻ &lt; F⁻ &lt; H₂O &lt; NH₃ &lt; NO₂⁻ &lt; CN⁻
                  </div>
                  <div className="mt-2 text-xs">
                    {currentLang === 'zh' ? '强配体能取代弱配体' : 'Strong ligands can displace weak ligands'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback */}
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

  // Continue with other enhanced games...
  // (I'll continue with the other games if you'd like, but this gives you an idea of the enhanced complexity)

  // Main component render
  if (currentGame) {
    return (
      <div>
        {/* Game Header with Back Button */}
        <div className="bg-black/20 backdrop-blur-md border-b border-white/20 p-4">
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

        {/* Render Current Game */}
        {currentGame === 'electrochemical' && <ElectrochemicalGame />}
        {currentGame === 'ligand-swap' && <LigandSwapGame />}
        {/* Add other games here */}
      </div>
    );
  }

  // Main menu (keep existing menu code)
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
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
          
          {/* Progress Stats */}
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

      {/* Games Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <article 
              key={game.id}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 
                         hover:border-white/40 transition-all duration-300 hover:scale-105
                         hover:shadow-2xl overflow-hidden group"
            >
              {/* Game Header */}
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

              {/* Game Content */}
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