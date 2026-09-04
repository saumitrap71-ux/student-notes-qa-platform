import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, PageHeader, Button } from '@/components';
import { demoQuestions, demoAnswers } from '@/data/demoData';
import { ThumbsUp, MessageCircle, Flag } from 'lucide-react';

export const QuestionDetailPage: React.FC = () => {
  const { id } = useParams();
  const question = demoQuestions.find(q => q.id === id);
  const answers = demoAnswers.filter(a => a.questionId === id);
  const [answerText, setAnswerText] = useState('');

  if (!question) {
    return (
      <Layout>
        <PageHeader title="Question Not Found" />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <p className="text-vey-light text-lg">The question you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Answer submitted:', answerText);
    alert('Answer submitted! (Demo - not saved to database yet)');
    setAnswerText('');
  };

  return (
    <Layout>
      <PageHeader 
        title={question.title}
        description={`${question.category} • ${question.subject}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Question */}
        <div className="bg-vey-charcoal border border-vey-gray rounded p-6 mb-8">
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-2">
              <button className="p-2 hover:bg-vey-dark rounded transition">
                <ThumbsUp size={20} />
              </button>
              <span className="text-vey-light font-semibold">{question.votes}</span>
            </div>

            <div className="flex-1">
              <p className="text-vey-light mb-4">{question.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-vey-gray">
                <div className="flex items-center gap-4">
                  <img 
                    src={question.authorAvatar} 
                    alt={question.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-vey-white font-semibold">{question.author}</p>
                    <p className="text-vey-gray text-sm">Asked {question.createdAt}</p>
                  </div>
                </div>
                <button className="text-vey-gray hover:text-vey-red transition">
                  <Flag size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-vey-white mb-6">
            {answers.length} Answer{answers.length !== 1 ? 's' : ''}
          </h2>
          <div className="space-y-4">
            {answers.map(answer => (
              <div key={answer.id} className="bg-vey-charcoal border border-vey-gray rounded p-6">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <button className="p-2 hover:bg-vey-dark rounded transition">
                      <ThumbsUp size={20} />
                    </button>
                    <span className="text-vey-light font-semibold">{answer.votes}</span>
                  </div>

                  <div className="flex-1">
                    <p className="text-vey-light mb-4">{answer.content}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-vey-gray">
                      <div className="flex items-center gap-4">
                        <img 
                          src={answer.authorAvatar} 
                          alt={answer.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-vey-white font-semibold">{answer.author}</p>
                          <p className="text-vey-gray text-sm">{answer.createdAt}</p>
                        </div>
                      </div>
                      <button className="text-vey-gray hover:text-vey-red transition">
                        <Flag size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Answer */}
        <div className="bg-vey-charcoal border border-vey-gray rounded p-6">
          <h2 className="text-2xl font-bold text-vey-white mb-6">Your Answer</h2>
          <form onSubmit={handleSubmitAnswer} className="space-y-4">
            <textarea
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              placeholder="Write your answer here..."
              rows={6}
              className="w-full px-4 py-3 bg-vey-dark border border-vey-gray rounded text-vey-white placeholder-vey-gray focus:outline-none focus:border-vey-red"
              required
            />
            <Button variant="primary" size="lg">
              <MessageCircle size={20} className="mr-2" />
              Post Answer
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
