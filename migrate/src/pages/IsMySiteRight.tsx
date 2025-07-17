import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const IsMySiteRight: React.FC = () => {
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'propertyType',
      question: 'What type of property do you want to protect?',
      options: [
        { value: 'residential', label: 'Residential Home', score: 3 },
        { value: 'retail', label: 'Retail Store', score: 5 },
        { value: 'warehouse', label: 'Warehouse/Industrial', score: 5 },
        { value: 'office', label: 'Office Building', score: 4 },
        { value: 'other', label: 'Other Commercial', score: 4 }
      ]
    },
    {
      id: 'crimeRate',
      question: 'How would you describe the crime rate in your area?',
      options: [
        { value: 'low', label: 'Low - Very safe area', score: 2 },
        { value: 'moderate', label: 'Moderate - Some incidents', score: 4 },
        { value: 'high', label: 'High - Frequent break-ins', score: 5 },
        { value: 'unknown', label: 'Not sure', score: 3 }
      ]
    },
    {
      id: 'valuables',
      question: 'What are you primarily trying to protect?',
      options: [
        { value: 'inventory', label: 'Inventory/Merchandise', score: 5 },
        { value: 'equipment', label: 'Equipment/Machinery', score: 4 },
        { value: 'documents', label: 'Documents/Data', score: 3 },
        { value: 'personal', label: 'Personal belongings', score: 3 },
        { value: 'cash', label: 'Cash/Valuables', score: 5 }
      ]
    },
    {
      id: 'currentSecurity',
      question: 'What security measures do you currently have?',
      options: [
        { value: 'none', label: 'No security system', score: 5 },
        { value: 'basic', label: 'Basic alarm system', score: 4 },
        { value: 'cameras', label: 'Cameras only', score: 4 },
        { value: 'comprehensive', label: 'Comprehensive system', score: 2 }
      ]
    },
    {
      id: 'previousIncidents',
      question: 'Have you experienced break-ins or attempted break-ins?',
      options: [
        { value: 'yes-recent', label: 'Yes, within the last year', score: 5 },
        { value: 'yes-past', label: 'Yes, but more than a year ago', score: 4 },
        { value: 'attempted', label: 'Attempted break-ins only', score: 4 },
        { value: 'no', label: 'No incidents', score: 2 }
      ]
    },
    {
      id: 'location',
      question: 'Where is your property located?',
      options: [
        { value: 'isolated', label: 'Isolated/Rural area', score: 5 },
        { value: 'industrial', label: 'Industrial district', score: 4 },
        { value: 'commercial', label: 'Commercial area', score: 3 },
        { value: 'residential', label: 'Residential neighborhood', score: 2 }
      ]
    },
    {
      id: 'responseTime',
      question: 'What is the typical police response time in your area?',
      options: [
        { value: 'fast', label: 'Under 5 minutes', score: 2 },
        { value: 'moderate', label: '5-15 minutes', score: 3 },
        { value: 'slow', label: '15+ minutes', score: 5 },
        { value: 'unknown', label: 'Not sure', score: 3 }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
        }
      }
    });
    return totalScore;
  };

  const getRecommendation = (score: number) => {
    if (score >= 30) {
      return {
        level: 'Highly Recommended',
        color: 'text-green-400',
        icon: CheckCircle,
        description: 'Your property is an excellent candidate for FlashFog security systems. The risk factors and property characteristics make fog security highly beneficial.',
        systems: ['FlashFog Pro 2000 or Industrial 5000', 'SecurityStrobe Ultra', 'SoundBarrier Pro'],
        priority: 'High Priority - Immediate installation recommended'
      };
    } else if (score >= 20) {
      return {
        level: 'Recommended',
        color: 'text-yellow-400',
        icon: AlertTriangle,
        description: 'Your property would benefit from FlashFog security systems. Several risk factors indicate that enhanced security would be valuable.',
        systems: ['FlashFog Compact 1000 or Pro 2000', 'SecurityStrobe Pro', 'SoundBarrier Standard'],
        priority: 'Medium Priority - Consider installation within 3-6 months'
      };
    } else {
      return {
        level: 'Consider Other Options',
        color: 'text-red-400',
        icon: XCircle,
        description: 'While FlashFog systems would still provide security benefits, your current risk level may not justify the investment. Consider basic security measures first.',
        systems: ['Basic alarm system', 'Security cameras', 'Improved lighting'],
        priority: 'Low Priority - Evaluate other security options first'
      };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResults(true);
    }
  };

  const score = calculateScore();
  const recommendation = getRecommendation(score);
  const IconComponent = recommendation.icon;

  return (
    <>
      <Helmet>
        <title>Is My Site Right for FlashFog? - Security Assessment Tool</title>
        <meta name="description" content="Take our security assessment to determine if your property is suitable for FlashFog security systems. Get personalized recommendations based on your specific situation." />
        <meta name="keywords" content="security assessment, site evaluation, FlashFog suitability, security system recommendation, property security evaluation" />
        <link rel="canonical" href="https://flashfog.com/is-my-site-right" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Is My Site Right for FlashFog?
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Take our assessment to determine if FlashFog security systems are right for your property
          </p>

          {!showResults ? (
            <>
              {/* Assessment Questions */}
              <div className="space-y-8 mb-12">
                {questions.map((question, index) => (
                  <div key={question.id} className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-3">
                      {question.options.map(option => (
                        <label
                          key={option.value}
                          className="flex items-center p-3 rounded border border-gray-600 hover:border-gray-500 cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            className="mr-3 text-cyan-400"
                          />
                          <span className="text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length !== questions.length}
                  className={`px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center ${
                    Object.keys(answers).length === questions.length
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Get My Assessment <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-gray-400 mt-4">
                  {Object.keys(answers).length} of {questions.length} questions answered
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <div className="text-center mb-8">
                  <IconComponent className={`w-16 h-16 ${recommendation.color} mx-auto mb-4`} />
                  <h2 className={`text-3xl font-bold ${recommendation.color} mb-4`}>
                    {recommendation.level}
                  </h2>
                  <div className="text-6xl font-bold text-white mb-2">{score}</div>
                  <div className="text-gray-300">out of 35 points</div>
                </div>

                <div className="max-w-3xl mx-auto">
                  <p className="text-gray-300 text-lg mb-8 text-center">
                    {recommendation.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Recommended Systems</h3>
                      <ul className="space-y-2">
                        {recommendation.systems.map((system, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {system}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Priority Level</h3>
                      <p className="text-gray-300">{recommendation.priority}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Detailed Analysis</h3>
                <div className="space-y-4">
                  {questions.map(question => {
                    const answer = answers[question.id];
                    const selectedOption = question.options.find(opt => opt.value === answer);
                    return (
                      <div key={question.id} className="flex justify-between items-center py-3 border-b border-gray-600">
                        <div>
                          <div className="text-white font-medium">{question.question}</div>
                          <div className="text-gray-300 text-sm">{selectedOption?.label}</div>
                        </div>
                        <div className="text-cyan-400 font-bold">{selectedOption?.score} pts</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Next Steps</h3>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      Review recommended systems
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      Contact us for consultation
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      Schedule site assessment
                    </li>
                    <li className="flex items-start">
                      <span className="bg-cyan-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      Get custom quote
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Additional Considerations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Insurance discounts may apply</li>
                    <li>• Professional installation available</li>
                    <li>• 100% money-back guarantee</li>
                    <li>• Financing options available</li>
                    <li>• 24/7 technical support</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/about-us" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Get Free Consultation
                  </a>
                  <a 
                    href="/store" 
                    className="bg-cyan-400 hover:bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    View Products
                  </a>
                </div>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({});
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Take Assessment Again
                </button>
              </div>
            </>
          )}

          {/* Information Section */}
          {!showResults && (
            <section className="mt-16 bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">About This Assessment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">What We Evaluate</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Property type and vulnerability</li>
                    <li>• Local crime rates and incidents</li>
                    <li>• Current security measures</li>
                    <li>• Response time factors</li>
                    <li>• Value of assets at risk</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">How It Helps</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Identifies security gaps</li>
                    <li>• Recommends appropriate systems</li>
                    <li>• Prioritizes security investments</li>
                    <li>• Provides cost-benefit analysis</li>
                    <li>• Guides implementation timeline</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default IsMySiteRight;