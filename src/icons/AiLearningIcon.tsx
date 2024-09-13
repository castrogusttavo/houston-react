import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiLearningIcon({
  iconName = 'ai-learning',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
