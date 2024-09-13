import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TissuePaperIcon({
  iconName = 'tissue-paper',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
