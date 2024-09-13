import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ToyTrainIcon({ iconName = 'toy-train', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
