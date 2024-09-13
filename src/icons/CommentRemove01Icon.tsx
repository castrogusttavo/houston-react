import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CommentRemove01Icon({
  iconName = 'comment-remove-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
