import React, { useState } from 'react';
import { Layout, PageHeader, QuestionCard, Button } from '@/components';
import { demoQuestions } from '@/data/demoData';
import { MessageCircle } from 'lucide-react';

export const QuestionsPage: React.FC = () => {
  const [questions, setQuestions] = useState(demoQuestions);

  return (
    <Layout>
      <PageHeader 
        title="Ask & Answer"
        description="Get help from fellow students"
      >
        <Button variant="primary" size="lg">
          <MessageCircle size={20} className="mr-2" />
          Ask a Question
        </Button>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {questions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
